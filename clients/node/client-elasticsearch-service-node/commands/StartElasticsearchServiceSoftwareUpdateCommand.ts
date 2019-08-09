import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartElasticsearchServiceSoftwareUpdate } from "../model/StartElasticsearchServiceSoftwareUpdate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartElasticsearchServiceSoftwareUpdateInput } from "../types/StartElasticsearchServiceSoftwareUpdateInput";
import { StartElasticsearchServiceSoftwareUpdateOutput } from "../types/StartElasticsearchServiceSoftwareUpdateOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/StartElasticsearchServiceSoftwareUpdateInput";
export * from "../types/StartElasticsearchServiceSoftwareUpdateOutput";
export * from "../types/StartElasticsearchServiceSoftwareUpdateExceptionsUnion";

export class StartElasticsearchServiceSoftwareUpdateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartElasticsearchServiceSoftwareUpdateInput,
      OutputTypesUnion,
      StartElasticsearchServiceSoftwareUpdateOutput,
      ElasticsearchServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartElasticsearchServiceSoftwareUpdate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartElasticsearchServiceSoftwareUpdateInput,
    StartElasticsearchServiceSoftwareUpdateOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartElasticsearchServiceSoftwareUpdateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartElasticsearchServiceSoftwareUpdateInput,
    StartElasticsearchServiceSoftwareUpdateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartElasticsearchServiceSoftwareUpdateInput,
        StartElasticsearchServiceSoftwareUpdateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
