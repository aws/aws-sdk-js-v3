import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetConnectorDefinition } from "../model/GetConnectorDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetConnectorDefinitionInput } from "../types/GetConnectorDefinitionInput";
import { GetConnectorDefinitionOutput } from "../types/GetConnectorDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetConnectorDefinitionInput";
export * from "../types/GetConnectorDefinitionOutput";
export * from "../types/GetConnectorDefinitionExceptionsUnion";

export class GetConnectorDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetConnectorDefinitionInput,
      OutputTypesUnion,
      GetConnectorDefinitionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = GetConnectorDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetConnectorDefinitionInput,
    GetConnectorDefinitionOutput,
    Blob
  >();

  constructor(readonly input: GetConnectorDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetConnectorDefinitionInput,
    GetConnectorDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetConnectorDefinitionInput, GetConnectorDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
