import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Blob
    > {
  readonly model = GetRepositoryTriggers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRepositoryTriggersInput,
    GetRepositoryTriggersOutput,
    Blob
  >();

  constructor(readonly input: GetRepositoryTriggersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
      model: this.model
    };

    return stack.resolve(
      handler<GetRepositoryTriggersInput, GetRepositoryTriggersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
