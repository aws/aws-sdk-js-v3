import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteApplicationReferenceDataSource } from "../model/operations/DeleteApplicationReferenceDataSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApplicationReferenceDataSourceInput } from "../types/DeleteApplicationReferenceDataSourceInput";
import { DeleteApplicationReferenceDataSourceOutput } from "../types/DeleteApplicationReferenceDataSourceOutput";
import { KinesisAnalyticsResolvedConfiguration } from "../KinesisAnalyticsConfiguration";
export * from "../types/DeleteApplicationReferenceDataSourceInput";
export * from "../types/DeleteApplicationReferenceDataSourceOutput";
export * from "../types/DeleteApplicationReferenceDataSourceExceptionsUnion";

export class DeleteApplicationReferenceDataSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApplicationReferenceDataSourceInput,
      OutputTypesUnion,
      DeleteApplicationReferenceDataSourceOutput,
      KinesisAnalyticsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteApplicationReferenceDataSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApplicationReferenceDataSourceInput,
    DeleteApplicationReferenceDataSourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteApplicationReferenceDataSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteApplicationReferenceDataSourceInput,
    DeleteApplicationReferenceDataSourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteApplicationReferenceDataSourceInput,
        DeleteApplicationReferenceDataSourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
