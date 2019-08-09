import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListManagedSchemaArns } from "../model/ListManagedSchemaArns";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListManagedSchemaArnsInput } from "../types/ListManagedSchemaArnsInput";
import { ListManagedSchemaArnsOutput } from "../types/ListManagedSchemaArnsOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListManagedSchemaArnsInput";
export * from "../types/ListManagedSchemaArnsOutput";
export * from "../types/ListManagedSchemaArnsExceptionsUnion";

export class ListManagedSchemaArnsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListManagedSchemaArnsInput,
      OutputTypesUnion,
      ListManagedSchemaArnsOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListManagedSchemaArns;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListManagedSchemaArnsInput,
    ListManagedSchemaArnsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListManagedSchemaArnsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListManagedSchemaArnsInput,
    ListManagedSchemaArnsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListManagedSchemaArnsInput, ListManagedSchemaArnsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
