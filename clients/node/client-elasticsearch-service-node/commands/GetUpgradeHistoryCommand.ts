import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetUpgradeHistory } from "../model/operations/GetUpgradeHistory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUpgradeHistoryInput } from "../types/GetUpgradeHistoryInput";
import { GetUpgradeHistoryOutput } from "../types/GetUpgradeHistoryOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/GetUpgradeHistoryInput";
export * from "../types/GetUpgradeHistoryOutput";
export * from "../types/GetUpgradeHistoryExceptionsUnion";

export class GetUpgradeHistoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUpgradeHistoryInput,
      OutputTypesUnion,
      GetUpgradeHistoryOutput,
      ElasticsearchServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetUpgradeHistory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUpgradeHistoryInput,
    GetUpgradeHistoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetUpgradeHistoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUpgradeHistoryInput, GetUpgradeHistoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUpgradeHistoryInput, GetUpgradeHistoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
