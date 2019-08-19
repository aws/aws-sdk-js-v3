import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteNamespace } from "../model/operations/DeleteNamespace";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNamespaceInput } from "../types/DeleteNamespaceInput";
import { DeleteNamespaceOutput } from "../types/DeleteNamespaceOutput";
import { ServiceDiscoveryResolvedConfiguration } from "../ServiceDiscoveryConfiguration";
export * from "../types/DeleteNamespaceInput";
export * from "../types/DeleteNamespaceOutput";
export * from "../types/DeleteNamespaceExceptionsUnion";

export class DeleteNamespaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNamespaceInput,
      OutputTypesUnion,
      DeleteNamespaceOutput,
      ServiceDiscoveryResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteNamespace;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNamespaceInput,
    DeleteNamespaceOutput,
    Blob
  >();

  constructor(readonly input: DeleteNamespaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceDiscoveryResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteNamespaceInput, DeleteNamespaceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteNamespaceInput, DeleteNamespaceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
