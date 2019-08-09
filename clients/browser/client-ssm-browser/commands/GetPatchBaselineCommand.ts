import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPatchBaseline } from "../model/GetPatchBaseline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPatchBaselineInput } from "../types/GetPatchBaselineInput";
import { GetPatchBaselineOutput } from "../types/GetPatchBaselineOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetPatchBaselineInput";
export * from "../types/GetPatchBaselineOutput";
export * from "../types/GetPatchBaselineExceptionsUnion";

export class GetPatchBaselineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPatchBaselineInput,
      OutputTypesUnion,
      GetPatchBaselineOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = GetPatchBaseline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPatchBaselineInput,
    GetPatchBaselineOutput,
    Blob
  >();

  constructor(readonly input: GetPatchBaselineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPatchBaselineInput, GetPatchBaselineOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPatchBaselineInput, GetPatchBaselineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
