import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListBulkDeploymentDetailedReports } from "../model/ListBulkDeploymentDetailedReports";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBulkDeploymentDetailedReportsInput } from "../types/ListBulkDeploymentDetailedReportsInput";
import { ListBulkDeploymentDetailedReportsOutput } from "../types/ListBulkDeploymentDetailedReportsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListBulkDeploymentDetailedReportsInput";
export * from "../types/ListBulkDeploymentDetailedReportsOutput";
export * from "../types/ListBulkDeploymentDetailedReportsExceptionsUnion";

export class ListBulkDeploymentDetailedReportsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBulkDeploymentDetailedReportsInput,
      OutputTypesUnion,
      ListBulkDeploymentDetailedReportsOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListBulkDeploymentDetailedReports;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBulkDeploymentDetailedReportsInput,
    ListBulkDeploymentDetailedReportsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListBulkDeploymentDetailedReportsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListBulkDeploymentDetailedReportsInput,
    ListBulkDeploymentDetailedReportsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListBulkDeploymentDetailedReportsInput,
        ListBulkDeploymentDetailedReportsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
