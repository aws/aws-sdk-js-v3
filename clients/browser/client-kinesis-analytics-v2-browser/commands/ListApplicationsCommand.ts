import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListApplications } from "../model/operations/ListApplications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListApplicationsInput } from "../types/ListApplicationsInput";
import { ListApplicationsOutput } from "../types/ListApplicationsOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
export * from "../types/ListApplicationsInput";
export * from "../types/ListApplicationsOutput";
export * from "../types/ListApplicationsExceptionsUnion";

export class ListApplicationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListApplicationsInput,
      OutputTypesUnion,
      ListApplicationsOutput,
      KinesisAnalyticsV2ResolvedConfiguration,
      Blob
    > {
  readonly model = ListApplications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListApplicationsInput,
    ListApplicationsOutput,
    Blob
  >();

  constructor(readonly input: ListApplicationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ListApplicationsInput, ListApplicationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListApplicationsInput, ListApplicationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
