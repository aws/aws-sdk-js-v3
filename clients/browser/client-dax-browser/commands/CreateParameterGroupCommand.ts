import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateParameterGroup } from "../model/operations/CreateParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateParameterGroupInput } from "../types/CreateParameterGroupInput";
import { CreateParameterGroupOutput } from "../types/CreateParameterGroupOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/CreateParameterGroupInput";
export * from "../types/CreateParameterGroupOutput";
export * from "../types/CreateParameterGroupExceptionsUnion";

export class CreateParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateParameterGroupInput,
      OutputTypesUnion,
      CreateParameterGroupOutput,
      DAXResolvedConfiguration,
      Blob
    > {
  readonly model = CreateParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateParameterGroupInput,
    CreateParameterGroupOutput,
    Blob
  >();

  constructor(readonly input: CreateParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateParameterGroupInput,
    CreateParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateParameterGroupInput, CreateParameterGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
