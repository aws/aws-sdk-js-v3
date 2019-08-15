import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ReleaseAddress } from "../model/operations/ReleaseAddress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReleaseAddressInput } from "../types/ReleaseAddressInput";
import { ReleaseAddressOutput } from "../types/ReleaseAddressOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ReleaseAddressInput";
export * from "../types/ReleaseAddressOutput";
export * from "../types/ReleaseAddressExceptionsUnion";

export class ReleaseAddressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReleaseAddressInput,
      OutputTypesUnion,
      ReleaseAddressOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ReleaseAddress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReleaseAddressInput,
    ReleaseAddressOutput,
    Blob
  >();

  constructor(readonly input: ReleaseAddressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ReleaseAddressInput, ReleaseAddressOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReleaseAddressInput, ReleaseAddressOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
