import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAppliedSchemaArns } from "../model/ListAppliedSchemaArns";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAppliedSchemaArnsInput } from "../types/ListAppliedSchemaArnsInput";
import { ListAppliedSchemaArnsOutput } from "../types/ListAppliedSchemaArnsOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListAppliedSchemaArnsInput";
export * from "../types/ListAppliedSchemaArnsOutput";
export * from "../types/ListAppliedSchemaArnsExceptionsUnion";

export class ListAppliedSchemaArnsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAppliedSchemaArnsInput,
      OutputTypesUnion,
      ListAppliedSchemaArnsOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAppliedSchemaArns;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAppliedSchemaArnsInput,
    ListAppliedSchemaArnsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAppliedSchemaArnsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAppliedSchemaArnsInput,
    ListAppliedSchemaArnsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAppliedSchemaArnsInput, ListAppliedSchemaArnsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
