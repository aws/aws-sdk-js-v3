import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDeploymentStatus } from "../model/operations/GetDeploymentStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeploymentStatusInput } from "../types/GetDeploymentStatusInput";
import { GetDeploymentStatusOutput } from "../types/GetDeploymentStatusOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetDeploymentStatusInput";
export * from "../types/GetDeploymentStatusOutput";
export * from "../types/GetDeploymentStatusExceptionsUnion";

export class GetDeploymentStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeploymentStatusInput,
      OutputTypesUnion,
      GetDeploymentStatusOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDeploymentStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeploymentStatusInput,
    GetDeploymentStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDeploymentStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDeploymentStatusInput,
    GetDeploymentStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDeploymentStatusInput, GetDeploymentStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
