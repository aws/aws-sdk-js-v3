import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDeploymentGroup } from "../model/GetDeploymentGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeploymentGroupInput } from "../types/GetDeploymentGroupInput";
import { GetDeploymentGroupOutput } from "../types/GetDeploymentGroupOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/GetDeploymentGroupInput";
export * from "../types/GetDeploymentGroupOutput";
export * from "../types/GetDeploymentGroupExceptionsUnion";

export class GetDeploymentGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeploymentGroupInput,
      OutputTypesUnion,
      GetDeploymentGroupOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = GetDeploymentGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeploymentGroupInput,
    GetDeploymentGroupOutput,
    Blob
  >();

  constructor(readonly input: GetDeploymentGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDeploymentGroupInput,
    GetDeploymentGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDeploymentGroupInput, GetDeploymentGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
