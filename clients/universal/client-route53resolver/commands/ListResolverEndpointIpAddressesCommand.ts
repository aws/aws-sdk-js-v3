import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListResolverEndpointIpAddresses } from "../model/ListResolverEndpointIpAddresses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResolverEndpointIpAddressesInput } from "../types/ListResolverEndpointIpAddressesInput";
import { ListResolverEndpointIpAddressesOutput } from "../types/ListResolverEndpointIpAddressesOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/ListResolverEndpointIpAddressesInput";
export * from "../types/ListResolverEndpointIpAddressesOutput";
export * from "../types/ListResolverEndpointIpAddressesExceptionsUnion";

export class ListResolverEndpointIpAddressesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResolverEndpointIpAddressesInput,
      OutputTypesUnion,
      ListResolverEndpointIpAddressesOutput,
      Route53ResolverResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListResolverEndpointIpAddresses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResolverEndpointIpAddressesInput,
    ListResolverEndpointIpAddressesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListResolverEndpointIpAddressesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListResolverEndpointIpAddressesInput,
    ListResolverEndpointIpAddressesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListResolverEndpointIpAddressesInput,
        ListResolverEndpointIpAddressesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
