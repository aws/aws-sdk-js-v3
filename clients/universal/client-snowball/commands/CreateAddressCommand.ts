import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateAddress } from "../model/CreateAddress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAddressInput } from "../types/CreateAddressInput";
import { CreateAddressOutput } from "../types/CreateAddressOutput";
import { SnowballResolvedConfiguration } from "../SnowballConfiguration";
export * from "../types/CreateAddressInput";
export * from "../types/CreateAddressOutput";
export * from "../types/CreateAddressExceptionsUnion";

export class CreateAddressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAddressInput,
      OutputTypesUnion,
      CreateAddressOutput,
      SnowballResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateAddress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAddressInput,
    CreateAddressOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateAddressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SnowballResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateAddressInput, CreateAddressOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAddressInput, CreateAddressOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
