import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetEmailIdentity } from "../model/GetEmailIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEmailIdentityInput } from "../types/GetEmailIdentityInput";
import { GetEmailIdentityOutput } from "../types/GetEmailIdentityOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/GetEmailIdentityInput";
export * from "../types/GetEmailIdentityOutput";
export * from "../types/GetEmailIdentityExceptionsUnion";

export class GetEmailIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEmailIdentityInput,
      OutputTypesUnion,
      GetEmailIdentityOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetEmailIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEmailIdentityInput,
    GetEmailIdentityOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetEmailIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetEmailIdentityInput, GetEmailIdentityOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEmailIdentityInput, GetEmailIdentityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
