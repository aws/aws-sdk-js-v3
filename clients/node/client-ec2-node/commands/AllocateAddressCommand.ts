import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AllocateAddress } from "../model/AllocateAddress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AllocateAddressInput } from "../types/AllocateAddressInput";
import { AllocateAddressOutput } from "../types/AllocateAddressOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AllocateAddressInput";
export * from "../types/AllocateAddressOutput";
export * from "../types/AllocateAddressExceptionsUnion";

export class AllocateAddressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AllocateAddressInput,
      OutputTypesUnion,
      AllocateAddressOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AllocateAddress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AllocateAddressInput,
    AllocateAddressOutput,
    _stream.Readable
  >();

  constructor(readonly input: AllocateAddressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<AllocateAddressInput, AllocateAddressOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AllocateAddressInput, AllocateAddressOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
