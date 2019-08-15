import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDeploymentJob } from "../model/operations/CreateDeploymentJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDeploymentJobInput } from "../types/CreateDeploymentJobInput";
import { CreateDeploymentJobOutput } from "../types/CreateDeploymentJobOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/CreateDeploymentJobInput";
export * from "../types/CreateDeploymentJobOutput";
export * from "../types/CreateDeploymentJobExceptionsUnion";

export class CreateDeploymentJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDeploymentJobInput,
      OutputTypesUnion,
      CreateDeploymentJobOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDeploymentJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDeploymentJobInput,
    CreateDeploymentJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDeploymentJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDeploymentJobInput,
    CreateDeploymentJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDeploymentJobInput, CreateDeploymentJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
