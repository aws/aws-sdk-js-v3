import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDeploymentTarget } from "../model/operations/GetDeploymentTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeploymentTargetInput } from "../types/GetDeploymentTargetInput";
import { GetDeploymentTargetOutput } from "../types/GetDeploymentTargetOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/GetDeploymentTargetInput";
export * from "../types/GetDeploymentTargetOutput";
export * from "../types/GetDeploymentTargetExceptionsUnion";

export class GetDeploymentTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeploymentTargetInput,
      OutputTypesUnion,
      GetDeploymentTargetOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDeploymentTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeploymentTargetInput,
    GetDeploymentTargetOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDeploymentTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDeploymentTargetInput,
    GetDeploymentTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDeploymentTargetInput, GetDeploymentTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
