import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ContinueDeployment } from "../model/ContinueDeployment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ContinueDeploymentInput } from "../types/ContinueDeploymentInput";
import { ContinueDeploymentOutput } from "../types/ContinueDeploymentOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/ContinueDeploymentInput";
export * from "../types/ContinueDeploymentOutput";
export * from "../types/ContinueDeploymentExceptionsUnion";

export class ContinueDeploymentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ContinueDeploymentInput,
      OutputTypesUnion,
      ContinueDeploymentOutput,
      CodeDeployResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ContinueDeployment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ContinueDeploymentInput,
    ContinueDeploymentOutput,
    Uint8Array
  >();

  constructor(readonly input: ContinueDeploymentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ContinueDeploymentInput,
    ContinueDeploymentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ContinueDeploymentInput, ContinueDeploymentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
