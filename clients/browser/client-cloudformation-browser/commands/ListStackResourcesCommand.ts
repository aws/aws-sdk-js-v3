import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListStackResources } from "../model/operations/ListStackResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListStackResourcesInput } from "../types/ListStackResourcesInput";
import { ListStackResourcesOutput } from "../types/ListStackResourcesOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/ListStackResourcesInput";
export * from "../types/ListStackResourcesOutput";
export * from "../types/ListStackResourcesExceptionsUnion";

export class ListStackResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListStackResourcesInput,
      OutputTypesUnion,
      ListStackResourcesOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = ListStackResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStackResourcesInput,
    ListStackResourcesOutput,
    Blob
  >();

  constructor(readonly input: ListStackResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListStackResourcesInput,
    ListStackResourcesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListStackResourcesInput, ListStackResourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
