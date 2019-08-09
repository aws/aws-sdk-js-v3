import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetMergeOptions } from "../model/GetMergeOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMergeOptionsInput } from "../types/GetMergeOptionsInput";
import { GetMergeOptionsOutput } from "../types/GetMergeOptionsOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/GetMergeOptionsInput";
export * from "../types/GetMergeOptionsOutput";
export * from "../types/GetMergeOptionsExceptionsUnion";

export class GetMergeOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMergeOptionsInput,
      OutputTypesUnion,
      GetMergeOptionsOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetMergeOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMergeOptionsInput,
    GetMergeOptionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetMergeOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMergeOptionsInput, GetMergeOptionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMergeOptionsInput, GetMergeOptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
