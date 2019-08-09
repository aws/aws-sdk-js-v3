import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEffectivePatchesForPatchBaseline } from "../model/DescribeEffectivePatchesForPatchBaseline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEffectivePatchesForPatchBaselineInput } from "../types/DescribeEffectivePatchesForPatchBaselineInput";
import { DescribeEffectivePatchesForPatchBaselineOutput } from "../types/DescribeEffectivePatchesForPatchBaselineOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeEffectivePatchesForPatchBaselineInput";
export * from "../types/DescribeEffectivePatchesForPatchBaselineOutput";
export * from "../types/DescribeEffectivePatchesForPatchBaselineExceptionsUnion";

export class DescribeEffectivePatchesForPatchBaselineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEffectivePatchesForPatchBaselineInput,
      OutputTypesUnion,
      DescribeEffectivePatchesForPatchBaselineOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeEffectivePatchesForPatchBaseline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEffectivePatchesForPatchBaselineInput,
    DescribeEffectivePatchesForPatchBaselineOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeEffectivePatchesForPatchBaselineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEffectivePatchesForPatchBaselineInput,
    DescribeEffectivePatchesForPatchBaselineOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeEffectivePatchesForPatchBaselineInput,
        DescribeEffectivePatchesForPatchBaselineOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
