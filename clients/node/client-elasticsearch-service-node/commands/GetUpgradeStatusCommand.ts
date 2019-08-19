import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetUpgradeStatus } from "../model/operations/GetUpgradeStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUpgradeStatusInput } from "../types/GetUpgradeStatusInput";
import { GetUpgradeStatusOutput } from "../types/GetUpgradeStatusOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/GetUpgradeStatusInput";
export * from "../types/GetUpgradeStatusOutput";
export * from "../types/GetUpgradeStatusExceptionsUnion";

export class GetUpgradeStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUpgradeStatusInput,
      OutputTypesUnion,
      GetUpgradeStatusOutput,
      ElasticsearchServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetUpgradeStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUpgradeStatusInput,
    GetUpgradeStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetUpgradeStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUpgradeStatusInput, GetUpgradeStatusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUpgradeStatusInput, GetUpgradeStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
