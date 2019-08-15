import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListEventSourceMappings } from "../model/operations/ListEventSourceMappings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEventSourceMappingsInput } from "../types/ListEventSourceMappingsInput";
import { ListEventSourceMappingsOutput } from "../types/ListEventSourceMappingsOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/ListEventSourceMappingsInput";
export * from "../types/ListEventSourceMappingsOutput";
export * from "../types/ListEventSourceMappingsExceptionsUnion";

export class ListEventSourceMappingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEventSourceMappingsInput,
      OutputTypesUnion,
      ListEventSourceMappingsOutput,
      LambdaResolvedConfiguration,
      Blob
    > {
  readonly model = ListEventSourceMappings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEventSourceMappingsInput,
    ListEventSourceMappingsOutput,
    Blob
  >();

  constructor(readonly input: ListEventSourceMappingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListEventSourceMappingsInput,
    ListEventSourceMappingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEventSourceMappingsInput, ListEventSourceMappingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
