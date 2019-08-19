import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateParameterGroup } from "../model/operations/UpdateParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateParameterGroupInput } from "../types/UpdateParameterGroupInput";
import { UpdateParameterGroupOutput } from "../types/UpdateParameterGroupOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/UpdateParameterGroupInput";
export * from "../types/UpdateParameterGroupOutput";
export * from "../types/UpdateParameterGroupExceptionsUnion";

export class UpdateParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateParameterGroupInput,
      OutputTypesUnion,
      UpdateParameterGroupOutput,
      DAXResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateParameterGroupInput,
    UpdateParameterGroupOutput,
    Blob
  >();

  constructor(readonly input: UpdateParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateParameterGroupInput,
    UpdateParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateParameterGroupInput, UpdateParameterGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
