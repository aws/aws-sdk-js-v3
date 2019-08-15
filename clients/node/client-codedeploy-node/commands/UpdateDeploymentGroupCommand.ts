import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDeploymentGroup } from "../model/operations/UpdateDeploymentGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDeploymentGroupInput } from "../types/UpdateDeploymentGroupInput";
import { UpdateDeploymentGroupOutput } from "../types/UpdateDeploymentGroupOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/UpdateDeploymentGroupInput";
export * from "../types/UpdateDeploymentGroupOutput";
export * from "../types/UpdateDeploymentGroupExceptionsUnion";

export class UpdateDeploymentGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDeploymentGroupInput,
      OutputTypesUnion,
      UpdateDeploymentGroupOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDeploymentGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDeploymentGroupInput,
    UpdateDeploymentGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDeploymentGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDeploymentGroupInput,
    UpdateDeploymentGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDeploymentGroupInput, UpdateDeploymentGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
