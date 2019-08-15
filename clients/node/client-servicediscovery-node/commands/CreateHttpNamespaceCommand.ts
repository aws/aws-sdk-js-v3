import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateHttpNamespace } from "../model/operations/CreateHttpNamespace";
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
      _stream.Readable
    > {
  readonly model = CreateHttpNamespace;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateHttpNamespaceInput,
    CreateHttpNamespaceOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateHttpNamespaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
