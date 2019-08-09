import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListFunctionDefinitions } from "../model/ListFunctionDefinitions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFunctionDefinitionsInput } from "../types/ListFunctionDefinitionsInput";
import { ListFunctionDefinitionsOutput } from "../types/ListFunctionDefinitionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListFunctionDefinitionsInput";
export * from "../types/ListFunctionDefinitionsOutput";
export * from "../types/ListFunctionDefinitionsExceptionsUnion";

export class ListFunctionDefinitionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFunctionDefinitionsInput,
      OutputTypesUnion,
      ListFunctionDefinitionsOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = ListFunctionDefinitions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFunctionDefinitionsInput,
    ListFunctionDefinitionsOutput,
    Blob
  >();

  constructor(readonly input: ListFunctionDefinitionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListFunctionDefinitionsInput,
    ListFunctionDefinitionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListFunctionDefinitionsInput, ListFunctionDefinitionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
