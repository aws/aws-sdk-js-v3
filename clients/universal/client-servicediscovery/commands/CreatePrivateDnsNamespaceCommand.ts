import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePrivateDnsNamespace } from "../model/CreatePrivateDnsNamespace";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePrivateDnsNamespaceInput } from "../types/CreatePrivateDnsNamespaceInput";
import { CreatePrivateDnsNamespaceOutput } from "../types/CreatePrivateDnsNamespaceOutput";
import { ServiceDiscoveryResolvedConfiguration } from "../ServiceDiscoveryConfiguration";
export * from "../types/CreatePrivateDnsNamespaceInput";
export * from "../types/CreatePrivateDnsNamespaceOutput";
export * from "../types/CreatePrivateDnsNamespaceExceptionsUnion";

export class CreatePrivateDnsNamespaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePrivateDnsNamespaceInput,
      OutputTypesUnion,
      CreatePrivateDnsNamespaceOutput,
      ServiceDiscoveryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreatePrivateDnsNamespace;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePrivateDnsNamespaceInput,
    CreatePrivateDnsNamespaceOutput,
    Uint8Array
  >();

  constructor(readonly input: CreatePrivateDnsNamespaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceDiscoveryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePrivateDnsNamespaceInput,
    CreatePrivateDnsNamespaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePrivateDnsNamespaceInput, CreatePrivateDnsNamespaceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
