import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListGroupVersions } from "../model/ListGroupVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGroupVersionsInput } from "../types/ListGroupVersionsInput";
import { ListGroupVersionsOutput } from "../types/ListGroupVersionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListGroupVersionsInput";
export * from "../types/ListGroupVersionsOutput";
export * from "../types/ListGroupVersionsExceptionsUnion";

export class ListGroupVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGroupVersionsInput,
      OutputTypesUnion,
      ListGroupVersionsOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = ListGroupVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGroupVersionsInput,
    ListGroupVersionsOutput,
    Blob
  >();

  constructor(readonly input: ListGroupVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<ListGroupVersionsInput, ListGroupVersionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListGroupVersionsInput, ListGroupVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
