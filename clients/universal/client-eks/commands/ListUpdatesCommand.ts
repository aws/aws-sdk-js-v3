import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListUpdates } from "../model/ListUpdates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListUpdatesInput } from "../types/ListUpdatesInput";
import { ListUpdatesOutput } from "../types/ListUpdatesOutput";
import { EKSResolvedConfiguration } from "../EKSConfiguration";
export * from "../types/ListUpdatesInput";
export * from "../types/ListUpdatesOutput";
export * from "../types/ListUpdatesExceptionsUnion";

export class ListUpdatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListUpdatesInput,
      OutputTypesUnion,
      ListUpdatesOutput,
      EKSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListUpdates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListUpdatesInput,
    ListUpdatesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListUpdatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EKSResolvedConfiguration
  ): __aws_sdk_types.Handler<ListUpdatesInput, ListUpdatesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListUpdatesInput, ListUpdatesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
