import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdvertiseByoipCidr } from "../model/operations/AdvertiseByoipCidr";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdvertiseByoipCidrInput } from "../types/AdvertiseByoipCidrInput";
import { AdvertiseByoipCidrOutput } from "../types/AdvertiseByoipCidrOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AdvertiseByoipCidrInput";
export * from "../types/AdvertiseByoipCidrOutput";
export * from "../types/AdvertiseByoipCidrExceptionsUnion";

export class AdvertiseByoipCidrCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdvertiseByoipCidrInput,
      OutputTypesUnion,
      AdvertiseByoipCidrOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = AdvertiseByoipCidr;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdvertiseByoipCidrInput,
    AdvertiseByoipCidrOutput,
    Blob
  >();

  constructor(readonly input: AdvertiseByoipCidrInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdvertiseByoipCidrInput,
    AdvertiseByoipCidrOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AdvertiseByoipCidrInput, AdvertiseByoipCidrOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
