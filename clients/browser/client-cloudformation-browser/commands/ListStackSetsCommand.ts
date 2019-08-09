import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListStackSets } from "../model/ListStackSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListStackSetsInput } from "../types/ListStackSetsInput";
import { ListStackSetsOutput } from "../types/ListStackSetsOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/ListStackSetsInput";
export * from "../types/ListStackSetsOutput";
export * from "../types/ListStackSetsExceptionsUnion";

export class ListStackSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListStackSetsInput,
      OutputTypesUnion,
      ListStackSetsOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = ListStackSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStackSetsInput,
    ListStackSetsOutput,
    Blob
  >();

  constructor(readonly input: ListStackSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<ListStackSetsInput, ListStackSetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListStackSetsInput, ListStackSetsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
