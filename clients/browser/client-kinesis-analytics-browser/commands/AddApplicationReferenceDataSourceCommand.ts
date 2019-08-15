import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddApplicationReferenceDataSource } from "../model/operations/AddApplicationReferenceDataSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddApplicationReferenceDataSourceInput } from "../types/AddApplicationReferenceDataSourceInput";
import { AddApplicationReferenceDataSourceOutput } from "../types/AddApplicationReferenceDataSourceOutput";
import { KinesisAnalyticsResolvedConfiguration } from "../KinesisAnalyticsConfiguration";
export * from "../types/AddApplicationReferenceDataSourceInput";
export * from "../types/AddApplicationReferenceDataSourceOutput";
export * from "../types/AddApplicationReferenceDataSourceExceptionsUnion";

export class AddApplicationReferenceDataSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddApplicationReferenceDataSourceInput,
      OutputTypesUnion,
      AddApplicationReferenceDataSourceOutput,
      KinesisAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = AddApplicationReferenceDataSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddApplicationReferenceDataSourceInput,
    AddApplicationReferenceDataSourceOutput,
    Blob
  >();

  constructor(readonly input: AddApplicationReferenceDataSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddApplicationReferenceDataSourceInput,
    AddApplicationReferenceDataSourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AddApplicationReferenceDataSourceInput,
        AddApplicationReferenceDataSourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
