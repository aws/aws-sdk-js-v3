import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { MergeBranchesBySquash } from "../model/MergeBranchesBySquash";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { MergeBranchesBySquashInput } from "../types/MergeBranchesBySquashInput";
import { MergeBranchesBySquashOutput } from "../types/MergeBranchesBySquashOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/MergeBranchesBySquashInput";
export * from "../types/MergeBranchesBySquashOutput";
export * from "../types/MergeBranchesBySquashExceptionsUnion";

export class MergeBranchesBySquashCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      MergeBranchesBySquashInput,
      OutputTypesUnion,
      MergeBranchesBySquashOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = MergeBranchesBySquash;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    MergeBranchesBySquashInput,
    MergeBranchesBySquashOutput,
    _stream.Readable
  >();

  constructor(readonly input: MergeBranchesBySquashInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    MergeBranchesBySquashInput,
    MergeBranchesBySquashOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<MergeBranchesBySquashInput, MergeBranchesBySquashOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
