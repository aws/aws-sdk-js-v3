import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDASHStreamingSessionURL } from "../model/GetDASHStreamingSessionURL";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDASHStreamingSessionURLInput } from "../types/GetDASHStreamingSessionURLInput";
import { GetDASHStreamingSessionURLOutput } from "../types/GetDASHStreamingSessionURLOutput";
import { KinesisVideoArchivedMediaResolvedConfiguration } from "../KinesisVideoArchivedMediaConfiguration";
export * from "../types/GetDASHStreamingSessionURLInput";
export * from "../types/GetDASHStreamingSessionURLOutput";
export * from "../types/GetDASHStreamingSessionURLExceptionsUnion";

export class GetDASHStreamingSessionURLCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDASHStreamingSessionURLInput,
      OutputTypesUnion,
      GetDASHStreamingSessionURLOutput,
      KinesisVideoArchivedMediaResolvedConfiguration,
      Blob
    > {
  readonly model = GetDASHStreamingSessionURL;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDASHStreamingSessionURLInput,
    GetDASHStreamingSessionURLOutput,
    Blob
  >();

  constructor(readonly input: GetDASHStreamingSessionURLInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisVideoArchivedMediaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDASHStreamingSessionURLInput,
    GetDASHStreamingSessionURLOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetDASHStreamingSessionURLInput,
        GetDASHStreamingSessionURLOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
