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
import { toHex } from "@aws-sdk/util-hex-encoding";

interface SendMessageResult {
  MD5OfMessageBody?: string;
}

export function sendMessageMiddleware(
  options: PreviouslyResolved
): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: InitializeHandler<any, Output>
  ): InitializeHandler<any, Output> => async (
    args: InitializeHandlerArguments<any>
  ): Promise<InitializeHandlerOutput<Output>> => {
    const resp = await next({ ...args });
    const output = resp.output as SendMessageResult;
    const hash = new options.md5();
    hash.update(args.input.MessageBody || "");
    if (output.MD5OfMessageBody !== toHex(await hash.digest())) {
      throw new Error("InvalidChecksumError");
    }
    return next({
      ...args
    });
  };
}

export const sendMessageMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["VALIDATE_BODY_MD5"],
  name: "sendMessageMiddleware"
};

export const getSendMessagePlugin = (
  config: PreviouslyResolved
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(
      sendMessageMiddleware(config),
      sendMessageMiddlewareOptions
    );
  }
});
