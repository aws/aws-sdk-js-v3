import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetNamespace } from "../model/GetNamespace";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetNamespaceInput } from "../types/GetNamespaceInput";
import { GetNamespaceOutput } from "../types/GetNamespaceOutput";
import { ServiceDiscoveryResolvedConfiguration } from "../ServiceDiscoveryConfiguration";
export * from "../types/GetNamespaceInput";
export * from "../types/GetNamespaceOutput";
export * from "../types/GetNamespaceExceptionsUnion";

export class GetNamespaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetNamespaceInput,
      OutputTypesUnion,
      GetNamespaceOutput,
      ServiceDiscoveryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetNamespace;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetNamespaceInput,
    GetNamespaceOutput,
    Uint8Array
  >();

  constructor(readonly input: GetNamespaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceDiscoveryResolvedConfiguration
  ): __aws_sdk_types.Handler<GetNamespaceInput, GetNamespaceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetNamespaceInput, GetNamespaceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
