import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDocumentClassificationJobs } from "../model/ListDocumentClassificationJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDocumentClassificationJobsInput } from "../types/ListDocumentClassificationJobsInput";
import { ListDocumentClassificationJobsOutput } from "../types/ListDocumentClassificationJobsOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/ListDocumentClassificationJobsInput";
export * from "../types/ListDocumentClassificationJobsOutput";
export * from "../types/ListDocumentClassificationJobsExceptionsUnion";

export class ListDocumentClassificationJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDocumentClassificationJobsInput,
      OutputTypesUnion,
      ListDocumentClassificationJobsOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = ListDocumentClassificationJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDocumentClassificationJobsInput,
    ListDocumentClassificationJobsOutput,
    Blob
  >();

  constructor(readonly input: ListDocumentClassificationJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDocumentClassificationJobsInput,
    ListDocumentClassificationJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListDocumentClassificationJobsInput,
        ListDocumentClassificationJobsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
