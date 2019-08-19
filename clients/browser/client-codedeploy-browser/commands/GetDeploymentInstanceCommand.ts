import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDeploymentInstance } from "../model/operations/GetDeploymentInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeploymentInstanceInput } from "../types/GetDeploymentInstanceInput";
import { GetDeploymentInstanceOutput } from "../types/GetDeploymentInstanceOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/GetDeploymentInstanceInput";
export * from "../types/GetDeploymentInstanceOutput";
export * from "../types/GetDeploymentInstanceExceptionsUnion";

export class GetDeploymentInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeploymentInstanceInput,
      OutputTypesUnion,
      GetDeploymentInstanceOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = GetDeploymentInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeploymentInstanceInput,
    GetDeploymentInstanceOutput,
    Blob
  >();

  constructor(readonly input: GetDeploymentInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDeploymentInstanceInput,
    GetDeploymentInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDeploymentInstanceInput, GetDeploymentInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
