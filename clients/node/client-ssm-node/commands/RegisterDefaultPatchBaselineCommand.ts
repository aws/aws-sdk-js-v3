import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegisterDefaultPatchBaseline } from "../model/RegisterDefaultPatchBaseline";
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
      _stream.Readable
    > {
  readonly model = RegisterDefaultPatchBaseline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterDefaultPatchBaselineInput,
    RegisterDefaultPatchBaselineOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegisterDefaultPatchBaselineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
