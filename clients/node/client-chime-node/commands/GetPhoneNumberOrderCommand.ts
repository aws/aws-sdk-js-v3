import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetPhoneNumberOrder } from "../model/GetPhoneNumberOrder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPhoneNumberOrderInput } from "../types/GetPhoneNumberOrderInput";
import { GetPhoneNumberOrderOutput } from "../types/GetPhoneNumberOrderOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/GetPhoneNumberOrderInput";
export * from "../types/GetPhoneNumberOrderOutput";
export * from "../types/GetPhoneNumberOrderExceptionsUnion";

export class GetPhoneNumberOrderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPhoneNumberOrderInput,
      OutputTypesUnion,
      GetPhoneNumberOrderOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetPhoneNumberOrder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPhoneNumberOrderInput,
    GetPhoneNumberOrderOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetPhoneNumberOrderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetPhoneNumberOrderInput,
    GetPhoneNumberOrderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPhoneNumberOrderInput, GetPhoneNumberOrderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
