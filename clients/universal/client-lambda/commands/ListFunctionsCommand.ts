import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListFunctions } from "../model/ListFunctions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFunctionsInput } from "../types/ListFunctionsInput";
import { ListFunctionsOutput } from "../types/ListFunctionsOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/ListFunctionsInput";
export * from "../types/ListFunctionsOutput";
export * from "../types/ListFunctionsExceptionsUnion";

export class ListFunctionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFunctionsInput,
      OutputTypesUnion,
      ListFunctionsOutput,
      LambdaResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListFunctions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFunctionsInput,
    ListFunctionsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListFunctionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<ListFunctionsInput, ListFunctionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListFunctionsInput, ListFunctionsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
