import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDevelopmentSchemaArns } from "../model/ListDevelopmentSchemaArns";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDevelopmentSchemaArnsInput } from "../types/ListDevelopmentSchemaArnsInput";
import { ListDevelopmentSchemaArnsOutput } from "../types/ListDevelopmentSchemaArnsOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListDevelopmentSchemaArnsInput";
export * from "../types/ListDevelopmentSchemaArnsOutput";
export * from "../types/ListDevelopmentSchemaArnsExceptionsUnion";

export class ListDevelopmentSchemaArnsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDevelopmentSchemaArnsInput,
      OutputTypesUnion,
      ListDevelopmentSchemaArnsOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListDevelopmentSchemaArns;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDevelopmentSchemaArnsInput,
    ListDevelopmentSchemaArnsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListDevelopmentSchemaArnsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDevelopmentSchemaArnsInput,
    ListDevelopmentSchemaArnsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDevelopmentSchemaArnsInput, ListDevelopmentSchemaArnsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
