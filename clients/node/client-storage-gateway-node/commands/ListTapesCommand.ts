import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTapes } from "../model/operations/ListTapes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTapesInput } from "../types/ListTapesInput";
import { ListTapesOutput } from "../types/ListTapesOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/ListTapesInput";
export * from "../types/ListTapesOutput";
export * from "../types/ListTapesExceptionsUnion";

export class ListTapesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTapesInput,
      OutputTypesUnion,
      ListTapesOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTapes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTapesInput,
    ListTapesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTapesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTapesInput, ListTapesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTapesInput, ListTapesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
