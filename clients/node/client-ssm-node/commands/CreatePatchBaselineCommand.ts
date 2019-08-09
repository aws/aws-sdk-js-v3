import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreatePatchBaseline } from "../model/CreatePatchBaseline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePatchBaselineInput } from "../types/CreatePatchBaselineInput";
import { CreatePatchBaselineOutput } from "../types/CreatePatchBaselineOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/CreatePatchBaselineInput";
export * from "../types/CreatePatchBaselineOutput";
export * from "../types/CreatePatchBaselineExceptionsUnion";

export class CreatePatchBaselineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePatchBaselineInput,
      OutputTypesUnion,
      CreatePatchBaselineOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreatePatchBaseline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePatchBaselineInput,
    CreatePatchBaselineOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreatePatchBaselineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePatchBaselineInput,
    CreatePatchBaselineOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePatchBaselineInput, CreatePatchBaselineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
