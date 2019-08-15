import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CancelElasticsearchServiceSoftwareUpdate } from "../model/operations/CancelElasticsearchServiceSoftwareUpdate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelElasticsearchServiceSoftwareUpdateInput } from "../types/CancelElasticsearchServiceSoftwareUpdateInput";
import { CancelElasticsearchServiceSoftwareUpdateOutput } from "../types/CancelElasticsearchServiceSoftwareUpdateOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/CancelElasticsearchServiceSoftwareUpdateInput";
export * from "../types/CancelElasticsearchServiceSoftwareUpdateOutput";
export * from "../types/CancelElasticsearchServiceSoftwareUpdateExceptionsUnion";

export class CancelElasticsearchServiceSoftwareUpdateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelElasticsearchServiceSoftwareUpdateInput,
      OutputTypesUnion,
      CancelElasticsearchServiceSoftwareUpdateOutput,
      ElasticsearchServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CancelElasticsearchServiceSoftwareUpdate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelElasticsearchServiceSoftwareUpdateInput,
    CancelElasticsearchServiceSoftwareUpdateOutput,
    _stream.Readable
  >();

  constructor(readonly input: CancelElasticsearchServiceSoftwareUpdateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelElasticsearchServiceSoftwareUpdateInput,
    CancelElasticsearchServiceSoftwareUpdateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CancelElasticsearchServiceSoftwareUpdateInput,
        CancelElasticsearchServiceSoftwareUpdateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
