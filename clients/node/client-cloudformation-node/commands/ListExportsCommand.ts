import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListExports } from "../model/operations/ListExports";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListExportsInput } from "../types/ListExportsInput";
import { ListExportsOutput } from "../types/ListExportsOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/ListExportsInput";
export * from "../types/ListExportsOutput";
export * from "../types/ListExportsExceptionsUnion";

export class ListExportsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListExportsInput,
      OutputTypesUnion,
      ListExportsOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListExports;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListExportsInput,
    ListExportsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListExportsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<ListExportsInput, ListExportsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListExportsInput, ListExportsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
