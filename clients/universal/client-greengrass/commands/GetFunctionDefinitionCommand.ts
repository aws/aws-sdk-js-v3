import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetFunctionDefinition } from "../model/GetFunctionDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFunctionDefinitionInput } from "../types/GetFunctionDefinitionInput";
import { GetFunctionDefinitionOutput } from "../types/GetFunctionDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetFunctionDefinitionInput";
export * from "../types/GetFunctionDefinitionOutput";
export * from "../types/GetFunctionDefinitionExceptionsUnion";

export class GetFunctionDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFunctionDefinitionInput,
      OutputTypesUnion,
      GetFunctionDefinitionOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetFunctionDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFunctionDefinitionInput,
    GetFunctionDefinitionOutput,
    Uint8Array
  >();

  constructor(readonly input: GetFunctionDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetFunctionDefinitionInput,
    GetFunctionDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetFunctionDefinitionInput, GetFunctionDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
