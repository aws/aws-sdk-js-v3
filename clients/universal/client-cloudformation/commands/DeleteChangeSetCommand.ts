import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteChangeSet } from "../model/DeleteChangeSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteChangeSetInput } from "../types/DeleteChangeSetInput";
import { DeleteChangeSetOutput } from "../types/DeleteChangeSetOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DeleteChangeSetInput";
export * from "../types/DeleteChangeSetOutput";
export * from "../types/DeleteChangeSetExceptionsUnion";

export class DeleteChangeSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteChangeSetInput,
      OutputTypesUnion,
      DeleteChangeSetOutput,
      CloudFormationResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteChangeSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteChangeSetInput,
    DeleteChangeSetOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteChangeSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteChangeSetInput, DeleteChangeSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteChangeSetInput, DeleteChangeSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
