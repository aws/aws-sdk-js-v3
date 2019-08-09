import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { MergeBranchesByFastForward } from "../model/MergeBranchesByFastForward";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { MergeBranchesByFastForwardInput } from "../types/MergeBranchesByFastForwardInput";
import { MergeBranchesByFastForwardOutput } from "../types/MergeBranchesByFastForwardOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/MergeBranchesByFastForwardInput";
export * from "../types/MergeBranchesByFastForwardOutput";
export * from "../types/MergeBranchesByFastForwardExceptionsUnion";

export class MergeBranchesByFastForwardCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      MergeBranchesByFastForwardInput,
      OutputTypesUnion,
      MergeBranchesByFastForwardOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = MergeBranchesByFastForward;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    MergeBranchesByFastForwardInput,
    MergeBranchesByFastForwardOutput,
    _stream.Readable
  >();

  constructor(readonly input: MergeBranchesByFastForwardInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    MergeBranchesByFastForwardInput,
    MergeBranchesByFastForwardOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        MergeBranchesByFastForwardInput,
        MergeBranchesByFastForwardOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
