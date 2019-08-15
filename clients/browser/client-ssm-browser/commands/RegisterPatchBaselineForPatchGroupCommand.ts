import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterPatchBaselineForPatchGroup } from "../model/operations/RegisterPatchBaselineForPatchGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterPatchBaselineForPatchGroupInput } from "../types/RegisterPatchBaselineForPatchGroupInput";
import { RegisterPatchBaselineForPatchGroupOutput } from "../types/RegisterPatchBaselineForPatchGroupOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/RegisterPatchBaselineForPatchGroupInput";
export * from "../types/RegisterPatchBaselineForPatchGroupOutput";
export * from "../types/RegisterPatchBaselineForPatchGroupExceptionsUnion";

export class RegisterPatchBaselineForPatchGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterPatchBaselineForPatchGroupInput,
      OutputTypesUnion,
      RegisterPatchBaselineForPatchGroupOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterPatchBaselineForPatchGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterPatchBaselineForPatchGroupInput,
    RegisterPatchBaselineForPatchGroupOutput,
    Blob
  >();

  constructor(readonly input: RegisterPatchBaselineForPatchGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterPatchBaselineForPatchGroupInput,
    RegisterPatchBaselineForPatchGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RegisterPatchBaselineForPatchGroupInput,
        RegisterPatchBaselineForPatchGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
