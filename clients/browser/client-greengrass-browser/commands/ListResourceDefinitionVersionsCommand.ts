import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListResourceDefinitionVersions } from "../model/ListResourceDefinitionVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResourceDefinitionVersionsInput } from "../types/ListResourceDefinitionVersionsInput";
import { ListResourceDefinitionVersionsOutput } from "../types/ListResourceDefinitionVersionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListResourceDefinitionVersionsInput";
export * from "../types/ListResourceDefinitionVersionsOutput";
export * from "../types/ListResourceDefinitionVersionsExceptionsUnion";

export class ListResourceDefinitionVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResourceDefinitionVersionsInput,
      OutputTypesUnion,
      ListResourceDefinitionVersionsOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = ListResourceDefinitionVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResourceDefinitionVersionsInput,
    ListResourceDefinitionVersionsOutput,
    Blob
  >();

  constructor(readonly input: ListResourceDefinitionVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListResourceDefinitionVersionsInput,
    ListResourceDefinitionVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListResourceDefinitionVersionsInput,
        ListResourceDefinitionVersionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
