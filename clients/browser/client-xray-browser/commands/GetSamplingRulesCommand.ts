import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSamplingRules } from "../model/operations/GetSamplingRules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSamplingRulesInput } from "../types/GetSamplingRulesInput";
import { GetSamplingRulesOutput } from "../types/GetSamplingRulesOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/GetSamplingRulesInput";
export * from "../types/GetSamplingRulesOutput";
export * from "../types/GetSamplingRulesExceptionsUnion";

export class GetSamplingRulesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSamplingRulesInput,
      OutputTypesUnion,
      GetSamplingRulesOutput,
      XRayResolvedConfiguration,
      Blob
    > {
  readonly model = GetSamplingRules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSamplingRulesInput,
    GetSamplingRulesOutput,
    Blob
  >();

  constructor(readonly input: GetSamplingRulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSamplingRulesInput, GetSamplingRulesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSamplingRulesInput, GetSamplingRulesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
