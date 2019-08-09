import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListComponents } from "../model/ListComponents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListComponentsInput } from "../types/ListComponentsInput";
import { ListComponentsOutput } from "../types/ListComponentsOutput";
import { ApplicationInsightsResolvedConfiguration } from "../ApplicationInsightsConfiguration";
export * from "../types/ListComponentsInput";
export * from "../types/ListComponentsOutput";
export * from "../types/ListComponentsExceptionsUnion";

export class ListComponentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListComponentsInput,
      OutputTypesUnion,
      ListComponentsOutput,
      ApplicationInsightsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListComponents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListComponentsInput,
    ListComponentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListComponentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationInsightsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListComponentsInput, ListComponentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListComponentsInput, ListComponentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
