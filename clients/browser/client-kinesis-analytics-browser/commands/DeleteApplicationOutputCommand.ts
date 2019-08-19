import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteApplicationOutput } from "../model/operations/DeleteApplicationOutput";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApplicationOutputInput } from "../types/DeleteApplicationOutputInput";
import { DeleteApplicationOutputOutput } from "../types/DeleteApplicationOutputOutput";
import { KinesisAnalyticsResolvedConfiguration } from "../KinesisAnalyticsConfiguration";
export * from "../types/DeleteApplicationOutputInput";
export * from "../types/DeleteApplicationOutputOutput";
export * from "../types/DeleteApplicationOutputExceptionsUnion";

export class DeleteApplicationOutputCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApplicationOutputInput,
      OutputTypesUnion,
      DeleteApplicationOutputOutput,
      KinesisAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteApplicationOutput;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApplicationOutputInput,
    DeleteApplicationOutputOutput,
    Blob
  >();

  constructor(readonly input: DeleteApplicationOutputInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteApplicationOutputInput,
    DeleteApplicationOutputOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteApplicationOutputInput, DeleteApplicationOutputOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
