import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = CreatePrivateDnsNamespace;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePrivateDnsNamespaceInput,
    CreatePrivateDnsNamespaceOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreatePrivateDnsNamespaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
