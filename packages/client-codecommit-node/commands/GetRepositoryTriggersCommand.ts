import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRepositoryTriggers } from "../model/GetRepositoryTriggers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRepositoryTriggersInput } from "../types/GetRepositoryTriggersInput";
import { GetRepositoryTriggersOutput } from "../types/GetRepositoryTriggersOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/GetRepositoryTriggersInput";
export * from "../types/GetRepositoryTriggersOutput";
export * from "../types/GetRepositoryTriggersExceptionsUnion";

export class GetRepositoryTriggersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRepositoryTriggersInput,
      OutputTypesUnion,
      GetRepositoryTriggersOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRepositoryTriggersInput,
    GetRepositoryTriggersOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRepositoryTriggersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRepositoryTriggersInput,
    GetRepositoryTriggersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: GetRepositoryTriggers
    };

    return stack.resolve(
      handler<GetRepositoryTriggersInput, GetRepositoryTriggersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
