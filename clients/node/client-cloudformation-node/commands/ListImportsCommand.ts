import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListImports } from "../model/operations/ListImports";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListImportsInput } from "../types/ListImportsInput";
import { ListImportsOutput } from "../types/ListImportsOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/ListImportsInput";
export * from "../types/ListImportsOutput";
export * from "../types/ListImportsExceptionsUnion";

export class ListImportsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListImportsInput,
      OutputTypesUnion,
      ListImportsOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListImports;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListImportsInput,
    ListImportsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListImportsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<ListImportsInput, ListImportsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListImportsInput, ListImportsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
