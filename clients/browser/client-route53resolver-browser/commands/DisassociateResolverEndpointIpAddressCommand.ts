import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateResolverEndpointIpAddress } from "../model/operations/DisassociateResolverEndpointIpAddress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateResolverEndpointIpAddressInput } from "../types/DisassociateResolverEndpointIpAddressInput";
import { DisassociateResolverEndpointIpAddressOutput } from "../types/DisassociateResolverEndpointIpAddressOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/DisassociateResolverEndpointIpAddressInput";
export * from "../types/DisassociateResolverEndpointIpAddressOutput";
export * from "../types/DisassociateResolverEndpointIpAddressExceptionsUnion";

export class DisassociateResolverEndpointIpAddressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateResolverEndpointIpAddressInput,
      OutputTypesUnion,
      DisassociateResolverEndpointIpAddressOutput,
      Route53ResolverResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateResolverEndpointIpAddress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateResolverEndpointIpAddressInput,
    DisassociateResolverEndpointIpAddressOutput,
    Blob
  >();

  constructor(readonly input: DisassociateResolverEndpointIpAddressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateResolverEndpointIpAddressInput,
    DisassociateResolverEndpointIpAddressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateResolverEndpointIpAddressInput,
        DisassociateResolverEndpointIpAddressOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
