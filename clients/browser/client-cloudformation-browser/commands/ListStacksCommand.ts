import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListStacks } from "../model/ListStacks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListStacksInput } from "../types/ListStacksInput";
import { ListStacksOutput } from "../types/ListStacksOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/ListStacksInput";
export * from "../types/ListStacksOutput";
export * from "../types/ListStacksExceptionsUnion";

export class ListStacksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListStacksInput,
      OutputTypesUnion,
      ListStacksOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = ListStacks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStacksInput,
    ListStacksOutput,
    Blob
  >();

  constructor(readonly input: ListStacksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<ListStacksInput, ListStacksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListStacksInput, ListStacksOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
