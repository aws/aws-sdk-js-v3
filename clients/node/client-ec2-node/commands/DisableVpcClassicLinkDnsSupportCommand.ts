import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisableVpcClassicLinkDnsSupport } from "../model/operations/DisableVpcClassicLinkDnsSupport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableVpcClassicLinkDnsSupportInput } from "../types/DisableVpcClassicLinkDnsSupportInput";
import { DisableVpcClassicLinkDnsSupportOutput } from "../types/DisableVpcClassicLinkDnsSupportOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DisableVpcClassicLinkDnsSupportInput";
export * from "../types/DisableVpcClassicLinkDnsSupportOutput";
export * from "../types/DisableVpcClassicLinkDnsSupportExceptionsUnion";

export class DisableVpcClassicLinkDnsSupportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableVpcClassicLinkDnsSupportInput,
      OutputTypesUnion,
      DisableVpcClassicLinkDnsSupportOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisableVpcClassicLinkDnsSupport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableVpcClassicLinkDnsSupportInput,
    DisableVpcClassicLinkDnsSupportOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisableVpcClassicLinkDnsSupportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableVpcClassicLinkDnsSupportInput,
    DisableVpcClassicLinkDnsSupportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisableVpcClassicLinkDnsSupportInput,
        DisableVpcClassicLinkDnsSupportOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
