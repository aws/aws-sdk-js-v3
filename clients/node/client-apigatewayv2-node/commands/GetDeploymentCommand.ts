import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDeployment } from "../model/GetDeployment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeploymentInput } from "../types/GetDeploymentInput";
import { GetDeploymentOutput } from "../types/GetDeploymentOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetDeploymentInput";
export * from "../types/GetDeploymentOutput";
export * from "../types/GetDeploymentExceptionsUnion";

export class GetDeploymentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeploymentInput,
      OutputTypesUnion,
      GetDeploymentOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDeployment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeploymentInput,
    GetDeploymentOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDeploymentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDeploymentInput, GetDeploymentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDeploymentInput, GetDeploymentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
