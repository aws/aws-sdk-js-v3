import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListVaults } from "../model/operations/ListVaults";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVaultsInput } from "../types/ListVaultsInput";
import { ListVaultsOutput } from "../types/ListVaultsOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/ListVaultsInput";
export * from "../types/ListVaultsOutput";
export * from "../types/ListVaultsExceptionsUnion";

export class ListVaultsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVaultsInput,
      OutputTypesUnion,
      ListVaultsOutput,
      GlacierResolvedConfiguration,
      Blob
    > {
  readonly model = ListVaults;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVaultsInput,
    ListVaultsOutput,
    Blob
  >();

  constructor(readonly input: ListVaultsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<ListVaultsInput, ListVaultsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListVaultsInput, ListVaultsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
