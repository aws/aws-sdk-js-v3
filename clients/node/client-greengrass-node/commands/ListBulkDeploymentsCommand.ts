import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = ListBulkDeployments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBulkDeploymentsInput,
    ListBulkDeploymentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListBulkDeploymentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
