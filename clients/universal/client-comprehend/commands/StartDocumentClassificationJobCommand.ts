import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartDocumentClassificationJob } from "../model/StartDocumentClassificationJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartDocumentClassificationJobInput } from "../types/StartDocumentClassificationJobInput";
import { StartDocumentClassificationJobOutput } from "../types/StartDocumentClassificationJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/StartDocumentClassificationJobInput";
export * from "../types/StartDocumentClassificationJobOutput";
export * from "../types/StartDocumentClassificationJobExceptionsUnion";

export class StartDocumentClassificationJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartDocumentClassificationJobInput,
      OutputTypesUnion,
      StartDocumentClassificationJobOutput,
      ComprehendResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StartDocumentClassificationJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartDocumentClassificationJobInput,
    StartDocumentClassificationJobOutput,
    Uint8Array
  >();

  constructor(readonly input: StartDocumentClassificationJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartDocumentClassificationJobInput,
    StartDocumentClassificationJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartDocumentClassificationJobInput,
        StartDocumentClassificationJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
