import {
  EventStreamPayloadHandler as IEventStreamPayloadHandler,
  BuildHandler,
  BuildHandlerArguments
} from "@aws-sdk/types";

export const eventStreamPayloadHandler: IEventStreamPayloadHandler = {
  handle: (next: BuildHandler<any, any>, args: BuildHandlerArguments<any>) =>
    next(args)
};
