import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListLocalDisks } from "../model/ListLocalDisks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLocalDisksInput } from "../types/ListLocalDisksInput";
import { ListLocalDisksOutput } from "../types/ListLocalDisksOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/ListLocalDisksInput";
export * from "../types/ListLocalDisksOutput";
export * from "../types/ListLocalDisksExceptionsUnion";

export class ListLocalDisksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLocalDisksInput,
      OutputTypesUnion,
      ListLocalDisksOutput,
      StorageGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListLocalDisks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLocalDisksInput,
    ListLocalDisksOutput,
    Uint8Array
  >();

  constructor(readonly input: ListLocalDisksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<ListLocalDisksInput, ListLocalDisksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListLocalDisksInput, ListLocalDisksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
