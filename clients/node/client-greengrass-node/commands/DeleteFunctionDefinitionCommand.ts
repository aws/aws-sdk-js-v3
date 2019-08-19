import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteFunctionDefinition } from "../model/operations/DeleteFunctionDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFunctionDefinitionInput } from "../types/DeleteFunctionDefinitionInput";
import { DeleteFunctionDefinitionOutput } from "../types/DeleteFunctionDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/DeleteFunctionDefinitionInput";
export * from "../types/DeleteFunctionDefinitionOutput";
export * from "../types/DeleteFunctionDefinitionExceptionsUnion";

export class DeleteFunctionDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFunctionDefinitionInput,
      OutputTypesUnion,
      DeleteFunctionDefinitionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteFunctionDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFunctionDefinitionInput,
    DeleteFunctionDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteFunctionDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteFunctionDefinitionInput,
    DeleteFunctionDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFunctionDefinitionInput, DeleteFunctionDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
