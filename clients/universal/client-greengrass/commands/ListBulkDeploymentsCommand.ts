import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListBulkDeployments } from "../model/ListBulkDeployments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBulkDeploymentsInput } from "../types/ListBulkDeploymentsInput";
import { ListBulkDeploymentsOutput } from "../types/ListBulkDeploymentsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListBulkDeploymentsInput";
export * from "../types/ListBulkDeploymentsOutput";
export * from "../types/ListBulkDeploymentsExceptionsUnion";

export class ListBulkDeploymentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBulkDeploymentsInput,
      OutputTypesUnion,
      ListBulkDeploymentsOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListBulkDeployments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBulkDeploymentsInput,
    ListBulkDeploymentsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListBulkDeploymentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListBulkDeploymentsInput,
    ListBulkDeploymentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBulkDeploymentsInput, ListBulkDeploymentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
