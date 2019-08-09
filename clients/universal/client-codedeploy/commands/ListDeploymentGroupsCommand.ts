import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDeploymentGroups } from "../model/ListDeploymentGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDeploymentGroupsInput } from "../types/ListDeploymentGroupsInput";
import { ListDeploymentGroupsOutput } from "../types/ListDeploymentGroupsOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/ListDeploymentGroupsInput";
export * from "../types/ListDeploymentGroupsOutput";
export * from "../types/ListDeploymentGroupsExceptionsUnion";

export class ListDeploymentGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDeploymentGroupsInput,
      OutputTypesUnion,
      ListDeploymentGroupsOutput,
      CodeDeployResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListDeploymentGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeploymentGroupsInput,
    ListDeploymentGroupsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListDeploymentGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDeploymentGroupsInput,
    ListDeploymentGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDeploymentGroupsInput, ListDeploymentGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
