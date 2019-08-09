import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDBParameterGroup } from "../model/CreateDBParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBParameterGroupInput } from "../types/CreateDBParameterGroupInput";
import { CreateDBParameterGroupOutput } from "../types/CreateDBParameterGroupOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/CreateDBParameterGroupInput";
export * from "../types/CreateDBParameterGroupOutput";
export * from "../types/CreateDBParameterGroupExceptionsUnion";

export class CreateDBParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDBParameterGroupInput,
      OutputTypesUnion,
      CreateDBParameterGroupOutput,
      NeptuneResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateDBParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBParameterGroupInput,
    CreateDBParameterGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateDBParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDBParameterGroupInput,
    CreateDBParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDBParameterGroupInput, CreateDBParameterGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
