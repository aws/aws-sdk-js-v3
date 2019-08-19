import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartBuild } from "../model/operations/StartBuild";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartBuildInput } from "../types/StartBuildInput";
import { StartBuildOutput } from "../types/StartBuildOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/StartBuildInput";
export * from "../types/StartBuildOutput";
export * from "../types/StartBuildExceptionsUnion";

export class StartBuildCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartBuildInput,
      OutputTypesUnion,
      StartBuildOutput,
      CodeBuildResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartBuild;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartBuildInput,
    StartBuildOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartBuildInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<StartBuildInput, StartBuildOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartBuildInput, StartBuildOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
