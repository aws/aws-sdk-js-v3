import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutThirdPartyJobFailureResult } from "../model/PutThirdPartyJobFailureResult";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutThirdPartyJobFailureResultInput } from "../types/PutThirdPartyJobFailureResultInput";
import { PutThirdPartyJobFailureResultOutput } from "../types/PutThirdPartyJobFailureResultOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/PutThirdPartyJobFailureResultInput";
export * from "../types/PutThirdPartyJobFailureResultOutput";
export * from "../types/PutThirdPartyJobFailureResultExceptionsUnion";

export class PutThirdPartyJobFailureResultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutThirdPartyJobFailureResultInput,
      OutputTypesUnion,
      PutThirdPartyJobFailureResultOutput,
      CodePipelineResolvedConfiguration,
      Blob
    > {
  readonly model = PutThirdPartyJobFailureResult;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutThirdPartyJobFailureResultInput,
    PutThirdPartyJobFailureResultOutput,
    Blob
  >();

  constructor(readonly input: PutThirdPartyJobFailureResultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutThirdPartyJobFailureResultInput,
    PutThirdPartyJobFailureResultOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutThirdPartyJobFailureResultInput,
        PutThirdPartyJobFailureResultOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
