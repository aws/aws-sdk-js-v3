import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTaskDefinitions } from "../model/operations/ListTaskDefinitions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTaskDefinitionsInput } from "../types/ListTaskDefinitionsInput";
import { ListTaskDefinitionsOutput } from "../types/ListTaskDefinitionsOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/ListTaskDefinitionsInput";
export * from "../types/ListTaskDefinitionsOutput";
export * from "../types/ListTaskDefinitionsExceptionsUnion";

export class ListTaskDefinitionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTaskDefinitionsInput,
      OutputTypesUnion,
      ListTaskDefinitionsOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTaskDefinitions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTaskDefinitionsInput,
    ListTaskDefinitionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTaskDefinitionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTaskDefinitionsInput,
    ListTaskDefinitionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTaskDefinitionsInput, ListTaskDefinitionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
