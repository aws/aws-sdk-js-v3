import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDeployments } from "../model/GetDeployments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeploymentsInput } from "../types/GetDeploymentsInput";
import { GetDeploymentsOutput } from "../types/GetDeploymentsOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetDeploymentsInput";
export * from "../types/GetDeploymentsOutput";
export * from "../types/GetDeploymentsExceptionsUnion";

export class GetDeploymentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeploymentsInput,
      OutputTypesUnion,
      GetDeploymentsOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDeployments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeploymentsInput,
    GetDeploymentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDeploymentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDeploymentsInput, GetDeploymentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDeploymentsInput, GetDeploymentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
