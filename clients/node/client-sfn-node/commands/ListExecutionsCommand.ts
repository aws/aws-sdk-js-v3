import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListExecutions } from "../model/ListExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListExecutionsInput } from "../types/ListExecutionsInput";
import { ListExecutionsOutput } from "../types/ListExecutionsOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/ListExecutionsInput";
export * from "../types/ListExecutionsOutput";
export * from "../types/ListExecutionsExceptionsUnion";

export class ListExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListExecutionsInput,
      OutputTypesUnion,
      ListExecutionsOutput,
      SFNResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListExecutionsInput,
    ListExecutionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<ListExecutionsInput, ListExecutionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListExecutionsInput, ListExecutionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
