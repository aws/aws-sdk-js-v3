import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListStackSetOperationResults } from "../model/ListStackSetOperationResults";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListStackSetOperationResultsInput } from "../types/ListStackSetOperationResultsInput";
import { ListStackSetOperationResultsOutput } from "../types/ListStackSetOperationResultsOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/ListStackSetOperationResultsInput";
export * from "../types/ListStackSetOperationResultsOutput";
export * from "../types/ListStackSetOperationResultsExceptionsUnion";

export class ListStackSetOperationResultsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListStackSetOperationResultsInput,
      OutputTypesUnion,
      ListStackSetOperationResultsOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListStackSetOperationResults;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStackSetOperationResultsInput,
    ListStackSetOperationResultsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListStackSetOperationResultsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListStackSetOperationResultsInput,
    ListStackSetOperationResultsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListStackSetOperationResultsInput,
        ListStackSetOperationResultsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
