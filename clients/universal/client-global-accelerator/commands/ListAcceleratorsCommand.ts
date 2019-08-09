import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAccelerators } from "../model/ListAccelerators";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAcceleratorsInput } from "../types/ListAcceleratorsInput";
import { ListAcceleratorsOutput } from "../types/ListAcceleratorsOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/ListAcceleratorsInput";
export * from "../types/ListAcceleratorsOutput";
export * from "../types/ListAcceleratorsExceptionsUnion";

export class ListAcceleratorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAcceleratorsInput,
      OutputTypesUnion,
      ListAcceleratorsOutput,
      GlobalAcceleratorResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListAccelerators;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAcceleratorsInput,
    ListAcceleratorsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListAcceleratorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<ListAcceleratorsInput, ListAcceleratorsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAcceleratorsInput, ListAcceleratorsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
