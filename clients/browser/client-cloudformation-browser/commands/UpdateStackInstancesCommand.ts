import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateStackInstances } from "../model/UpdateStackInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateStackInstancesInput } from "../types/UpdateStackInstancesInput";
import { UpdateStackInstancesOutput } from "../types/UpdateStackInstancesOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/UpdateStackInstancesInput";
export * from "../types/UpdateStackInstancesOutput";
export * from "../types/UpdateStackInstancesExceptionsUnion";

export class UpdateStackInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateStackInstancesInput,
      OutputTypesUnion,
      UpdateStackInstancesOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateStackInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateStackInstancesInput,
    UpdateStackInstancesOutput,
    Blob
  >();

  constructor(readonly input: UpdateStackInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateStackInstancesInput,
    UpdateStackInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateStackInstancesInput, UpdateStackInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
