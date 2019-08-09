import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListFunctionDefinitionVersions } from "../model/ListFunctionDefinitionVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFunctionDefinitionVersionsInput } from "../types/ListFunctionDefinitionVersionsInput";
import { ListFunctionDefinitionVersionsOutput } from "../types/ListFunctionDefinitionVersionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListFunctionDefinitionVersionsInput";
export * from "../types/ListFunctionDefinitionVersionsOutput";
export * from "../types/ListFunctionDefinitionVersionsExceptionsUnion";

export class ListFunctionDefinitionVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFunctionDefinitionVersionsInput,
      OutputTypesUnion,
      ListFunctionDefinitionVersionsOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListFunctionDefinitionVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFunctionDefinitionVersionsInput,
    ListFunctionDefinitionVersionsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListFunctionDefinitionVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListFunctionDefinitionVersionsInput,
    ListFunctionDefinitionVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListFunctionDefinitionVersionsInput,
        ListFunctionDefinitionVersionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
