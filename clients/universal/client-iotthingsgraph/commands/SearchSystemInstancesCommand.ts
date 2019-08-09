import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchSystemInstances } from "../model/SearchSystemInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchSystemInstancesInput } from "../types/SearchSystemInstancesInput";
import { SearchSystemInstancesOutput } from "../types/SearchSystemInstancesOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/SearchSystemInstancesInput";
export * from "../types/SearchSystemInstancesOutput";
export * from "../types/SearchSystemInstancesExceptionsUnion";

export class SearchSystemInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchSystemInstancesInput,
      OutputTypesUnion,
      SearchSystemInstancesOutput,
      IoTThingsGraphResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SearchSystemInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchSystemInstancesInput,
    SearchSystemInstancesOutput,
    Uint8Array
  >();

  constructor(readonly input: SearchSystemInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SearchSystemInstancesInput,
    SearchSystemInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchSystemInstancesInput, SearchSystemInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
