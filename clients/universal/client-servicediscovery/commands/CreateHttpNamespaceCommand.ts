import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateHttpNamespace } from "../model/CreateHttpNamespace";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateHttpNamespaceInput } from "../types/CreateHttpNamespaceInput";
import { CreateHttpNamespaceOutput } from "../types/CreateHttpNamespaceOutput";
import { ServiceDiscoveryResolvedConfiguration } from "../ServiceDiscoveryConfiguration";
export * from "../types/CreateHttpNamespaceInput";
export * from "../types/CreateHttpNamespaceOutput";
export * from "../types/CreateHttpNamespaceExceptionsUnion";

export class CreateHttpNamespaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateHttpNamespaceInput,
      OutputTypesUnion,
      CreateHttpNamespaceOutput,
      ServiceDiscoveryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateHttpNamespace;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateHttpNamespaceInput,
    CreateHttpNamespaceOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateHttpNamespaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceDiscoveryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateHttpNamespaceInput,
    CreateHttpNamespaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateHttpNamespaceInput, CreateHttpNamespaceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
