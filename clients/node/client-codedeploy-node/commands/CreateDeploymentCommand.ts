import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDeployment } from "../model/operations/CreateDeployment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDeploymentInput } from "../types/CreateDeploymentInput";
import { CreateDeploymentOutput } from "../types/CreateDeploymentOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/CreateDeploymentInput";
export * from "../types/CreateDeploymentOutput";
export * from "../types/CreateDeploymentExceptionsUnion";

export class CreateDeploymentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDeploymentInput,
      OutputTypesUnion,
      CreateDeploymentOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDeployment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDeploymentInput,
    CreateDeploymentOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDeploymentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDeploymentInput, CreateDeploymentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDeploymentInput, CreateDeploymentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
