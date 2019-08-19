import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteParameterGroup } from "../model/operations/DeleteParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteParameterGroupInput } from "../types/DeleteParameterGroupInput";
import { DeleteParameterGroupOutput } from "../types/DeleteParameterGroupOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/DeleteParameterGroupInput";
export * from "../types/DeleteParameterGroupOutput";
export * from "../types/DeleteParameterGroupExceptionsUnion";

export class DeleteParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteParameterGroupInput,
      OutputTypesUnion,
      DeleteParameterGroupOutput,
      DAXResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteParameterGroupInput,
    DeleteParameterGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteParameterGroupInput,
    DeleteParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteParameterGroupInput, DeleteParameterGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
