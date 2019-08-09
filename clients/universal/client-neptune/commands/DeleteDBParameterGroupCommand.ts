import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDBParameterGroup } from "../model/DeleteDBParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDBParameterGroupInput } from "../types/DeleteDBParameterGroupInput";
import { DeleteDBParameterGroupOutput } from "../types/DeleteDBParameterGroupOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/DeleteDBParameterGroupInput";
export * from "../types/DeleteDBParameterGroupOutput";
export * from "../types/DeleteDBParameterGroupExceptionsUnion";

export class DeleteDBParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDBParameterGroupInput,
      OutputTypesUnion,
      DeleteDBParameterGroupOutput,
      NeptuneResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDBParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDBParameterGroupInput,
    DeleteDBParameterGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDBParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDBParameterGroupInput,
    DeleteDBParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDBParameterGroupInput, DeleteDBParameterGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
