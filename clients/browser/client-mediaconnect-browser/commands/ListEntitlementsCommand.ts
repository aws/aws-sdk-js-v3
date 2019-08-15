import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListEntitlements } from "../model/operations/ListEntitlements";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEntitlementsInput } from "../types/ListEntitlementsInput";
import { ListEntitlementsOutput } from "../types/ListEntitlementsOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/ListEntitlementsInput";
export * from "../types/ListEntitlementsOutput";
export * from "../types/ListEntitlementsExceptionsUnion";

export class ListEntitlementsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEntitlementsInput,
      OutputTypesUnion,
      ListEntitlementsOutput,
      MediaConnectResolvedConfiguration,
      Blob
    > {
  readonly model = ListEntitlements;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEntitlementsInput,
    ListEntitlementsOutput,
    Blob
  >();

  constructor(readonly input: ListEntitlementsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<ListEntitlementsInput, ListEntitlementsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEntitlementsInput, ListEntitlementsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
