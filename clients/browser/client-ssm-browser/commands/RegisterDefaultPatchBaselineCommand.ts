import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterDefaultPatchBaseline } from "../model/operations/RegisterDefaultPatchBaseline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterDefaultPatchBaselineInput } from "../types/RegisterDefaultPatchBaselineInput";
import { RegisterDefaultPatchBaselineOutput } from "../types/RegisterDefaultPatchBaselineOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/RegisterDefaultPatchBaselineInput";
export * from "../types/RegisterDefaultPatchBaselineOutput";
export * from "../types/RegisterDefaultPatchBaselineExceptionsUnion";

export class RegisterDefaultPatchBaselineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterDefaultPatchBaselineInput,
      OutputTypesUnion,
      RegisterDefaultPatchBaselineOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterDefaultPatchBaseline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterDefaultPatchBaselineInput,
    RegisterDefaultPatchBaselineOutput,
    Blob
  >();

  constructor(readonly input: RegisterDefaultPatchBaselineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterDefaultPatchBaselineInput,
    RegisterDefaultPatchBaselineOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RegisterDefaultPatchBaselineInput,
        RegisterDefaultPatchBaselineOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
