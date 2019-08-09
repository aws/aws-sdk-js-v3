import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteStackInstances } from "../model/DeleteStackInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteStackInstancesInput } from "../types/DeleteStackInstancesInput";
import { DeleteStackInstancesOutput } from "../types/DeleteStackInstancesOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DeleteStackInstancesInput";
export * from "../types/DeleteStackInstancesOutput";
export * from "../types/DeleteStackInstancesExceptionsUnion";

export class DeleteStackInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteStackInstancesInput,
      OutputTypesUnion,
      DeleteStackInstancesOutput,
      CloudFormationResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteStackInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteStackInstancesInput,
    DeleteStackInstancesOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteStackInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteStackInstancesInput,
    DeleteStackInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteStackInstancesInput, DeleteStackInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
