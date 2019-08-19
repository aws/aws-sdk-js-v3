import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateConnectorDefinition } from "../model/operations/CreateConnectorDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateConnectorDefinitionInput } from "../types/CreateConnectorDefinitionInput";
import { CreateConnectorDefinitionOutput } from "../types/CreateConnectorDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateConnectorDefinitionInput";
export * from "../types/CreateConnectorDefinitionOutput";
export * from "../types/CreateConnectorDefinitionExceptionsUnion";

export class CreateConnectorDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateConnectorDefinitionInput,
      OutputTypesUnion,
      CreateConnectorDefinitionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateConnectorDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateConnectorDefinitionInput,
    CreateConnectorDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateConnectorDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateConnectorDefinitionInput,
    CreateConnectorDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateConnectorDefinitionInput, CreateConnectorDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
