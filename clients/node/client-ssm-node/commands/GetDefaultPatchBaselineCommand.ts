import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDefaultPatchBaseline } from "../model/GetDefaultPatchBaseline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDefaultPatchBaselineInput } from "../types/GetDefaultPatchBaselineInput";
import { GetDefaultPatchBaselineOutput } from "../types/GetDefaultPatchBaselineOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetDefaultPatchBaselineInput";
export * from "../types/GetDefaultPatchBaselineOutput";
export * from "../types/GetDefaultPatchBaselineExceptionsUnion";

export class GetDefaultPatchBaselineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDefaultPatchBaselineInput,
      OutputTypesUnion,
      GetDefaultPatchBaselineOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDefaultPatchBaseline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDefaultPatchBaselineInput,
    GetDefaultPatchBaselineOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDefaultPatchBaselineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDefaultPatchBaselineInput,
    GetDefaultPatchBaselineOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDefaultPatchBaselineInput, GetDefaultPatchBaselineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
