import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopBuild } from "../model/StopBuild";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopBuildInput } from "../types/StopBuildInput";
import { StopBuildOutput } from "../types/StopBuildOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/StopBuildInput";
export * from "../types/StopBuildOutput";
export * from "../types/StopBuildExceptionsUnion";

export class StopBuildCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopBuildInput,
      OutputTypesUnion,
      StopBuildOutput,
      CodeBuildResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopBuild;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopBuildInput,
    StopBuildOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopBuildInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<StopBuildInput, StopBuildOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopBuildInput, StopBuildOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
