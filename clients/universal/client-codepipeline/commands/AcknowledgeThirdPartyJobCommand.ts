import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AcknowledgeThirdPartyJob } from "../model/AcknowledgeThirdPartyJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcknowledgeThirdPartyJobInput } from "../types/AcknowledgeThirdPartyJobInput";
import { AcknowledgeThirdPartyJobOutput } from "../types/AcknowledgeThirdPartyJobOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/AcknowledgeThirdPartyJobInput";
export * from "../types/AcknowledgeThirdPartyJobOutput";
export * from "../types/AcknowledgeThirdPartyJobExceptionsUnion";

export class AcknowledgeThirdPartyJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcknowledgeThirdPartyJobInput,
      OutputTypesUnion,
      AcknowledgeThirdPartyJobOutput,
      CodePipelineResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AcknowledgeThirdPartyJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcknowledgeThirdPartyJobInput,
    AcknowledgeThirdPartyJobOutput,
    Uint8Array
  >();

  constructor(readonly input: AcknowledgeThirdPartyJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AcknowledgeThirdPartyJobInput,
    AcknowledgeThirdPartyJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AcknowledgeThirdPartyJobInput, AcknowledgeThirdPartyJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
