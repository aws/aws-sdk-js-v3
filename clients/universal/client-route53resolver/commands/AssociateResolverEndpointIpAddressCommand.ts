import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateResolverEndpointIpAddress } from "../model/AssociateResolverEndpointIpAddress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateResolverEndpointIpAddressInput } from "../types/AssociateResolverEndpointIpAddressInput";
import { AssociateResolverEndpointIpAddressOutput } from "../types/AssociateResolverEndpointIpAddressOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/AssociateResolverEndpointIpAddressInput";
export * from "../types/AssociateResolverEndpointIpAddressOutput";
export * from "../types/AssociateResolverEndpointIpAddressExceptionsUnion";

export class AssociateResolverEndpointIpAddressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateResolverEndpointIpAddressInput,
      OutputTypesUnion,
      AssociateResolverEndpointIpAddressOutput,
      Route53ResolverResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssociateResolverEndpointIpAddress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateResolverEndpointIpAddressInput,
    AssociateResolverEndpointIpAddressOutput,
    Uint8Array
  >();

  constructor(readonly input: AssociateResolverEndpointIpAddressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateResolverEndpointIpAddressInput,
    AssociateResolverEndpointIpAddressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateResolverEndpointIpAddressInput,
        AssociateResolverEndpointIpAddressOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
