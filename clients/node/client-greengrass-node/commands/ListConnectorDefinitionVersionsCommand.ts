import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListConnectorDefinitionVersions } from "../model/operations/ListConnectorDefinitionVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListConnectorDefinitionVersionsInput } from "../types/ListConnectorDefinitionVersionsInput";
import { ListConnectorDefinitionVersionsOutput } from "../types/ListConnectorDefinitionVersionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListConnectorDefinitionVersionsInput";
export * from "../types/ListConnectorDefinitionVersionsOutput";
export * from "../types/ListConnectorDefinitionVersionsExceptionsUnion";

export class ListConnectorDefinitionVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListConnectorDefinitionVersionsInput,
      OutputTypesUnion,
      ListConnectorDefinitionVersionsOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListConnectorDefinitionVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListConnectorDefinitionVersionsInput,
    ListConnectorDefinitionVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListConnectorDefinitionVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListConnectorDefinitionVersionsInput,
    ListConnectorDefinitionVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListConnectorDefinitionVersionsInput,
        ListConnectorDefinitionVersionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
