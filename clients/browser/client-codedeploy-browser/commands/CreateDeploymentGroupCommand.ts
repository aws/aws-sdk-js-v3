import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDeploymentGroup } from "../model/operations/CreateDeploymentGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDeploymentGroupInput } from "../types/CreateDeploymentGroupInput";
import { CreateDeploymentGroupOutput } from "../types/CreateDeploymentGroupOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/CreateDeploymentGroupInput";
export * from "../types/CreateDeploymentGroupOutput";
export * from "../types/CreateDeploymentGroupExceptionsUnion";

export class CreateDeploymentGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDeploymentGroupInput,
      OutputTypesUnion,
      CreateDeploymentGroupOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDeploymentGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDeploymentGroupInput,
    CreateDeploymentGroupOutput,
    Blob
  >();

  constructor(readonly input: CreateDeploymentGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDeploymentGroupInput,
    CreateDeploymentGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDeploymentGroupInput, CreateDeploymentGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
