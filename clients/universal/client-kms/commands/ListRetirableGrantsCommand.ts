import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRetirableGrants } from "../model/ListRetirableGrants";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRetirableGrantsInput } from "../types/ListRetirableGrantsInput";
import { ListRetirableGrantsOutput } from "../types/ListRetirableGrantsOutput";
import { KMSResolvedConfiguration } from "../KMSConfiguration";
export * from "../types/ListRetirableGrantsInput";
export * from "../types/ListRetirableGrantsOutput";
export * from "../types/ListRetirableGrantsExceptionsUnion";

export class ListRetirableGrantsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRetirableGrantsInput,
      OutputTypesUnion,
      ListRetirableGrantsOutput,
      KMSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListRetirableGrants;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRetirableGrantsInput,
    ListRetirableGrantsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListRetirableGrantsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: KMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListRetirableGrantsInput,
    ListRetirableGrantsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRetirableGrantsInput, ListRetirableGrantsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
