import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateResolverEndpointIpAddress } from "../model/operations/AssociateResolverEndpointIpAddress";
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
      _stream.Readable
    > {
  readonly model = AssociateResolverEndpointIpAddress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateResolverEndpointIpAddressInput,
    AssociateResolverEndpointIpAddressOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateResolverEndpointIpAddressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
