import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeregisterTaskDefinition } from "../model/DeregisterTaskDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterTaskDefinitionInput } from "../types/DeregisterTaskDefinitionInput";
import { DeregisterTaskDefinitionOutput } from "../types/DeregisterTaskDefinitionOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/DeregisterTaskDefinitionInput";
export * from "../types/DeregisterTaskDefinitionOutput";
export * from "../types/DeregisterTaskDefinitionExceptionsUnion";

export class DeregisterTaskDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterTaskDefinitionInput,
      OutputTypesUnion,
      DeregisterTaskDefinitionOutput,
      ECSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeregisterTaskDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterTaskDefinitionInput,
    DeregisterTaskDefinitionOutput,
    Uint8Array
  >();

  constructor(readonly input: DeregisterTaskDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterTaskDefinitionInput,
    DeregisterTaskDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterTaskDefinitionInput, DeregisterTaskDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
