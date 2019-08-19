import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListChangeSets } from "../model/operations/ListChangeSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListChangeSetsInput } from "../types/ListChangeSetsInput";
import { ListChangeSetsOutput } from "../types/ListChangeSetsOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/ListChangeSetsInput";
export * from "../types/ListChangeSetsOutput";
export * from "../types/ListChangeSetsExceptionsUnion";

export class ListChangeSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListChangeSetsInput,
      OutputTypesUnion,
      ListChangeSetsOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = ListChangeSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListChangeSetsInput,
    ListChangeSetsOutput,
    Blob
  >();

  constructor(readonly input: ListChangeSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<ListChangeSetsInput, ListChangeSetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListChangeSetsInput, ListChangeSetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
