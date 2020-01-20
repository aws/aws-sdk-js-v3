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

interface SendMessageBatchResult {
  Successful: Array<SendMessageBatchResultEntry> | undefined;
}

interface SendMessageBatchResultEntry {
  Id: string | undefined;
  MD5OfMessageBody: string | undefined;
  MessageId: string | undefined;
}

export function sendMessageBatchMiddleware(
  options: PreviouslyResolved
): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: InitializeHandler<any, Output>
  ): InitializeHandler<any, Output> => async (
    args: InitializeHandlerArguments<any>
  ): Promise<InitializeHandlerOutput<Output>> => {
    const resp = await next({ ...args });
    const output = (resp.output as unknown) as SendMessageBatchResult;
    let messageIds = [];
    let entries: { [index: string]: SendMessageBatchResultEntry } = {};
    if (output.Successful !== undefined) {
      for (const entry of output.Successful) {
        if (entry.Id !== undefined) {
          entries[entry.Id] = entry;
        }
      }
    }
    for (const entry of args.input.Entries) {
      if (entries[entry.Id]) {
        const md5 = entries[entry.Id].MD5OfMessageBody;
        const hash = new options.md5();
        hash.update(entry.MD5OfMessageBody || "");
        if (md5 !== (await hash.digest()).toString()) {
          messageIds.push(entries[entry.Id].MessageId);
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

export const sendMessageBatchMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["VALIDATE_BODY_MD5"],
  name: "sendMessageBatchMiddleware"
};

export const getSendMessageBatchPlugin = (
  config: PreviouslyResolved
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(
      sendMessageBatchMiddleware(config),
      sendMessageBatchMiddlewareOptions
    );
  }
});
