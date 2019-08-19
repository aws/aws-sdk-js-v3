import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeletePlatformApplication } from "../model/operations/DeletePlatformApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePlatformApplicationInput } from "../types/DeletePlatformApplicationInput";
import { DeletePlatformApplicationOutput } from "../types/DeletePlatformApplicationOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/DeletePlatformApplicationInput";
export * from "../types/DeletePlatformApplicationOutput";
export * from "../types/DeletePlatformApplicationExceptionsUnion";

export class DeletePlatformApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePlatformApplicationInput,
      OutputTypesUnion,
      DeletePlatformApplicationOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeletePlatformApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePlatformApplicationInput,
    DeletePlatformApplicationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeletePlatformApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeletePlatformApplicationInput,
    DeletePlatformApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePlatformApplicationInput, DeletePlatformApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
