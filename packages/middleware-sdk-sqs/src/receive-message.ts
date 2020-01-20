import { PreviouslyResolved } from "./configurations";
import {
  InitializeHandler,
  InitializeMiddleware,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  MetadataBearer,
  Pluggable
} from "@aws-sdk/types";

interface ReceiveMessageResult {
  Messages: Array<Message>;
}

interface Message {
  Body: string | undefined;
  MD5OfBody: string | undefined;
  MessageId: string | undefined;
}

export function receiveMessageMiddleware(
  options: PreviouslyResolved
): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: InitializeHandler<any, Output>
  ): InitializeHandler<any, Output> => async (
    args: InitializeHandlerArguments<any>
  ): Promise<InitializeHandlerOutput<Output>> => {
    const resp = await next({ ...args });
    const output = (resp.output as unknown) as ReceiveMessageResult;
    let messageIds = [];
    if (output.Messages !== undefined) {
      for (const message of output.Messages) {
        const md5 = message.MD5OfBody;
        const hash = new options.md5();
        hash.update(message.Body || "");
        if (md5 !== (await hash.digest()).toString()) {
          messageIds.push(message.MessageId);
        }
      }
    }
    if (messageIds.length > 0) {
      throw new Error("Invalid messages: " + messageIds.join(", "));
    }

    return next({
      ...args
    });
  };
}

export const receiveMessageMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["VALIDATE_BODY_MD5"],
  name: "receiveMessageMiddleware"
};

export const getReceiveMessagePlugin = (
  config: PreviouslyResolved
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(
      receiveMessageMiddleware(config),
      receiveMessageMiddlewareOptions
    );
  }
});
