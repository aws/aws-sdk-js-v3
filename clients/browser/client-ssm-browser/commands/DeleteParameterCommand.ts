import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteParameter } from "../model/operations/DeleteParameter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteParameterInput } from "../types/DeleteParameterInput";
import { DeleteParameterOutput } from "../types/DeleteParameterOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DeleteParameterInput";
export * from "../types/DeleteParameterOutput";
export * from "../types/DeleteParameterExceptionsUnion";

export class DeleteParameterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteParameterInput,
      OutputTypesUnion,
      DeleteParameterOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteParameter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteParameterInput,
    DeleteParameterOutput,
    Blob
  >();

  constructor(readonly input: DeleteParameterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteParameterInput, DeleteParameterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteParameterInput, DeleteParameterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
