import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutRepositoryTriggers } from "../model/operations/PutRepositoryTriggers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutRepositoryTriggersInput } from "../types/PutRepositoryTriggersInput";
import { PutRepositoryTriggersOutput } from "../types/PutRepositoryTriggersOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/PutRepositoryTriggersInput";
export * from "../types/PutRepositoryTriggersOutput";
export * from "../types/PutRepositoryTriggersExceptionsUnion";

export class PutRepositoryTriggersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutRepositoryTriggersInput,
      OutputTypesUnion,
      PutRepositoryTriggersOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutRepositoryTriggers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutRepositoryTriggersInput,
    PutRepositoryTriggersOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutRepositoryTriggersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutRepositoryTriggersInput,
    PutRepositoryTriggersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutRepositoryTriggersInput, PutRepositoryTriggersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
