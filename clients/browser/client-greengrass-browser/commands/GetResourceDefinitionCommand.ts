import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetResourceDefinition } from "../model/GetResourceDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResourceDefinitionInput } from "../types/GetResourceDefinitionInput";
import { GetResourceDefinitionOutput } from "../types/GetResourceDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetResourceDefinitionInput";
export * from "../types/GetResourceDefinitionOutput";
export * from "../types/GetResourceDefinitionExceptionsUnion";

export class GetResourceDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResourceDefinitionInput,
      OutputTypesUnion,
      GetResourceDefinitionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = GetResourceDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResourceDefinitionInput,
    GetResourceDefinitionOutput,
    Blob
  >();

  constructor(readonly input: GetResourceDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetResourceDefinitionInput,
    GetResourceDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResourceDefinitionInput, GetResourceDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
