import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResendContactReachabilityEmail } from "../model/ResendContactReachabilityEmail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResendContactReachabilityEmailInput } from "../types/ResendContactReachabilityEmailInput";
import { ResendContactReachabilityEmailOutput } from "../types/ResendContactReachabilityEmailOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/ResendContactReachabilityEmailInput";
export * from "../types/ResendContactReachabilityEmailOutput";
export * from "../types/ResendContactReachabilityEmailExceptionsUnion";

export class ResendContactReachabilityEmailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResendContactReachabilityEmailInput,
      OutputTypesUnion,
      ResendContactReachabilityEmailOutput,
      Route53DomainsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResendContactReachabilityEmail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResendContactReachabilityEmailInput,
    ResendContactReachabilityEmailOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResendContactReachabilityEmailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResendContactReachabilityEmailInput,
    ResendContactReachabilityEmailOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ResendContactReachabilityEmailInput,
        ResendContactReachabilityEmailOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
