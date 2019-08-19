import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateStackInstances } from "../model/operations/CreateStackInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateStackInstancesInput } from "../types/CreateStackInstancesInput";
import { CreateStackInstancesOutput } from "../types/CreateStackInstancesOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/CreateStackInstancesInput";
export * from "../types/CreateStackInstancesOutput";
export * from "../types/CreateStackInstancesExceptionsUnion";

export class CreateStackInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateStackInstancesInput,
      OutputTypesUnion,
      CreateStackInstancesOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = CreateStackInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateStackInstancesInput,
    CreateStackInstancesOutput,
    Blob
  >();

  constructor(readonly input: CreateStackInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateStackInstancesInput,
    CreateStackInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateStackInstancesInput, CreateStackInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
