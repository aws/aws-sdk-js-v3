import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListPhoneNumberOrders } from "../model/operations/ListPhoneNumberOrders";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPhoneNumberOrdersInput } from "../types/ListPhoneNumberOrdersInput";
import { ListPhoneNumberOrdersOutput } from "../types/ListPhoneNumberOrdersOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/ListPhoneNumberOrdersInput";
export * from "../types/ListPhoneNumberOrdersOutput";
export * from "../types/ListPhoneNumberOrdersExceptionsUnion";

export class ListPhoneNumberOrdersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPhoneNumberOrdersInput,
      OutputTypesUnion,
      ListPhoneNumberOrdersOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListPhoneNumberOrders;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPhoneNumberOrdersInput,
    ListPhoneNumberOrdersOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListPhoneNumberOrdersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPhoneNumberOrdersInput,
    ListPhoneNumberOrdersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPhoneNumberOrdersInput, ListPhoneNumberOrdersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
