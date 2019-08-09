import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeregisterPatchBaselineForPatchGroup } from "../model/DeregisterPatchBaselineForPatchGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterPatchBaselineForPatchGroupInput } from "../types/DeregisterPatchBaselineForPatchGroupInput";
import { DeregisterPatchBaselineForPatchGroupOutput } from "../types/DeregisterPatchBaselineForPatchGroupOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DeregisterPatchBaselineForPatchGroupInput";
export * from "../types/DeregisterPatchBaselineForPatchGroupOutput";
export * from "../types/DeregisterPatchBaselineForPatchGroupExceptionsUnion";

export class DeregisterPatchBaselineForPatchGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterPatchBaselineForPatchGroupInput,
      OutputTypesUnion,
      DeregisterPatchBaselineForPatchGroupOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeregisterPatchBaselineForPatchGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterPatchBaselineForPatchGroupInput,
    DeregisterPatchBaselineForPatchGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: DeregisterPatchBaselineForPatchGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterPatchBaselineForPatchGroupInput,
    DeregisterPatchBaselineForPatchGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeregisterPatchBaselineForPatchGroupInput,
        DeregisterPatchBaselineForPatchGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
