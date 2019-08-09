import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListIndices } from "../model/ListIndices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListIndicesInput } from "../types/ListIndicesInput";
import { ListIndicesOutput } from "../types/ListIndicesOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListIndicesInput";
export * from "../types/ListIndicesOutput";
export * from "../types/ListIndicesExceptionsUnion";

export class ListIndicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListIndicesInput,
      OutputTypesUnion,
      ListIndicesOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListIndices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListIndicesInput,
    ListIndicesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListIndicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<ListIndicesInput, ListIndicesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListIndicesInput, ListIndicesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
