import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ExecuteChangeSet } from "../model/ExecuteChangeSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExecuteChangeSetInput } from "../types/ExecuteChangeSetInput";
import { ExecuteChangeSetOutput } from "../types/ExecuteChangeSetOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/ExecuteChangeSetInput";
export * from "../types/ExecuteChangeSetOutput";
export * from "../types/ExecuteChangeSetExceptionsUnion";

export class ExecuteChangeSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExecuteChangeSetInput,
      OutputTypesUnion,
      ExecuteChangeSetOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = ExecuteChangeSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExecuteChangeSetInput,
    ExecuteChangeSetOutput,
    Blob
  >();

  constructor(readonly input: ExecuteChangeSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<ExecuteChangeSetInput, ExecuteChangeSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ExecuteChangeSetInput, ExecuteChangeSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
