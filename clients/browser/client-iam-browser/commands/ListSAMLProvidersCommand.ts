import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSAMLProviders } from "../model/ListSAMLProviders";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSAMLProvidersInput } from "../types/ListSAMLProvidersInput";
import { ListSAMLProvidersOutput } from "../types/ListSAMLProvidersOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListSAMLProvidersInput";
export * from "../types/ListSAMLProvidersOutput";
export * from "../types/ListSAMLProvidersExceptionsUnion";

export class ListSAMLProvidersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSAMLProvidersInput,
      OutputTypesUnion,
      ListSAMLProvidersOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = ListSAMLProviders;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSAMLProvidersInput,
    ListSAMLProvidersOutput,
    Blob
  >();

  constructor(readonly input: ListSAMLProvidersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListSAMLProvidersInput, ListSAMLProvidersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSAMLProvidersInput, ListSAMLProvidersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
