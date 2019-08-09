import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListInstanceFleets } from "../model/ListInstanceFleets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListInstanceFleetsInput } from "../types/ListInstanceFleetsInput";
import { ListInstanceFleetsOutput } from "../types/ListInstanceFleetsOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/ListInstanceFleetsInput";
export * from "../types/ListInstanceFleetsOutput";
export * from "../types/ListInstanceFleetsExceptionsUnion";

export class ListInstanceFleetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListInstanceFleetsInput,
      OutputTypesUnion,
      ListInstanceFleetsOutput,
      EMRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListInstanceFleets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListInstanceFleetsInput,
    ListInstanceFleetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListInstanceFleetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListInstanceFleetsInput,
    ListInstanceFleetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListInstanceFleetsInput, ListInstanceFleetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
