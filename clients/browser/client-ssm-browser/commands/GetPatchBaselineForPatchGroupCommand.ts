import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPatchBaselineForPatchGroup } from "../model/operations/GetPatchBaselineForPatchGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPatchBaselineForPatchGroupInput } from "../types/GetPatchBaselineForPatchGroupInput";
import { GetPatchBaselineForPatchGroupOutput } from "../types/GetPatchBaselineForPatchGroupOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetPatchBaselineForPatchGroupInput";
export * from "../types/GetPatchBaselineForPatchGroupOutput";
export * from "../types/GetPatchBaselineForPatchGroupExceptionsUnion";

export class GetPatchBaselineForPatchGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPatchBaselineForPatchGroupInput,
      OutputTypesUnion,
      GetPatchBaselineForPatchGroupOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = GetPatchBaselineForPatchGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPatchBaselineForPatchGroupInput,
    GetPatchBaselineForPatchGroupOutput,
    Blob
  >();

  constructor(readonly input: GetPatchBaselineForPatchGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetPatchBaselineForPatchGroupInput,
    GetPatchBaselineForPatchGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetPatchBaselineForPatchGroupInput,
        GetPatchBaselineForPatchGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
