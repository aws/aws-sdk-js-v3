import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteCoreDefinition } from "../model/operations/DeleteCoreDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCoreDefinitionInput } from "../types/DeleteCoreDefinitionInput";
import { DeleteCoreDefinitionOutput } from "../types/DeleteCoreDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/DeleteCoreDefinitionInput";
export * from "../types/DeleteCoreDefinitionOutput";
export * from "../types/DeleteCoreDefinitionExceptionsUnion";

export class DeleteCoreDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCoreDefinitionInput,
      OutputTypesUnion,
      DeleteCoreDefinitionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteCoreDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCoreDefinitionInput,
    DeleteCoreDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteCoreDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCoreDefinitionInput,
    DeleteCoreDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCoreDefinitionInput, DeleteCoreDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
