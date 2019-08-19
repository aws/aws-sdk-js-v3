import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetachInternetGateway } from "../model/operations/DetachInternetGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachInternetGatewayInput } from "../types/DetachInternetGatewayInput";
import { DetachInternetGatewayOutput } from "../types/DetachInternetGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DetachInternetGatewayInput";
export * from "../types/DetachInternetGatewayOutput";
export * from "../types/DetachInternetGatewayExceptionsUnion";

export class DetachInternetGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachInternetGatewayInput,
      OutputTypesUnion,
      DetachInternetGatewayOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetachInternetGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachInternetGatewayInput,
    DetachInternetGatewayOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetachInternetGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetachInternetGatewayInput,
    DetachInternetGatewayOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachInternetGatewayInput, DetachInternetGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
