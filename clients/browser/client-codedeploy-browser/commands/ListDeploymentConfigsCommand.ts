import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDeploymentConfigs } from "../model/ListDeploymentConfigs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDeploymentConfigsInput } from "../types/ListDeploymentConfigsInput";
import { ListDeploymentConfigsOutput } from "../types/ListDeploymentConfigsOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/ListDeploymentConfigsInput";
export * from "../types/ListDeploymentConfigsOutput";
export * from "../types/ListDeploymentConfigsExceptionsUnion";

export class ListDeploymentConfigsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDeploymentConfigsInput,
      OutputTypesUnion,
      ListDeploymentConfigsOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = ListDeploymentConfigs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeploymentConfigsInput,
    ListDeploymentConfigsOutput,
    Blob
  >();

  constructor(readonly input: ListDeploymentConfigsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDeploymentConfigsInput,
    ListDeploymentConfigsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDeploymentConfigsInput, ListDeploymentConfigsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
