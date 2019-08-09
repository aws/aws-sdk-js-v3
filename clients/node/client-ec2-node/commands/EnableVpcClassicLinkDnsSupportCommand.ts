import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableVpcClassicLinkDnsSupport } from "../model/EnableVpcClassicLinkDnsSupport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableVpcClassicLinkDnsSupportInput } from "../types/EnableVpcClassicLinkDnsSupportInput";
import { EnableVpcClassicLinkDnsSupportOutput } from "../types/EnableVpcClassicLinkDnsSupportOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/EnableVpcClassicLinkDnsSupportInput";
export * from "../types/EnableVpcClassicLinkDnsSupportOutput";
export * from "../types/EnableVpcClassicLinkDnsSupportExceptionsUnion";

export class EnableVpcClassicLinkDnsSupportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableVpcClassicLinkDnsSupportInput,
      OutputTypesUnion,
      EnableVpcClassicLinkDnsSupportOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableVpcClassicLinkDnsSupport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableVpcClassicLinkDnsSupportInput,
    EnableVpcClassicLinkDnsSupportOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableVpcClassicLinkDnsSupportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableVpcClassicLinkDnsSupportInput,
    EnableVpcClassicLinkDnsSupportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        EnableVpcClassicLinkDnsSupportInput,
        EnableVpcClassicLinkDnsSupportOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
