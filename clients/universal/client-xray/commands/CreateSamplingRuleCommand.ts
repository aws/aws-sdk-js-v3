import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSamplingRule } from "../model/CreateSamplingRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSamplingRuleInput } from "../types/CreateSamplingRuleInput";
import { CreateSamplingRuleOutput } from "../types/CreateSamplingRuleOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/CreateSamplingRuleInput";
export * from "../types/CreateSamplingRuleOutput";
export * from "../types/CreateSamplingRuleExceptionsUnion";

export class CreateSamplingRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSamplingRuleInput,
      OutputTypesUnion,
      CreateSamplingRuleOutput,
      XRayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateSamplingRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSamplingRuleInput,
    CreateSamplingRuleOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateSamplingRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSamplingRuleInput,
    CreateSamplingRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSamplingRuleInput, CreateSamplingRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
