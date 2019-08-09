import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePhoneNumberOrder } from "../model/CreatePhoneNumberOrder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePhoneNumberOrderInput } from "../types/CreatePhoneNumberOrderInput";
import { CreatePhoneNumberOrderOutput } from "../types/CreatePhoneNumberOrderOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/CreatePhoneNumberOrderInput";
export * from "../types/CreatePhoneNumberOrderOutput";
export * from "../types/CreatePhoneNumberOrderExceptionsUnion";

export class CreatePhoneNumberOrderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePhoneNumberOrderInput,
      OutputTypesUnion,
      CreatePhoneNumberOrderOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = CreatePhoneNumberOrder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePhoneNumberOrderInput,
    CreatePhoneNumberOrderOutput,
    Blob
  >();

  constructor(readonly input: CreatePhoneNumberOrderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePhoneNumberOrderInput,
    CreatePhoneNumberOrderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePhoneNumberOrderInput, CreatePhoneNumberOrderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
