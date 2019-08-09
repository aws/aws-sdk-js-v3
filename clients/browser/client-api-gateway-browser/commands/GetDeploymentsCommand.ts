import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Blob
    > {
  readonly model = GetDeployments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeploymentsInput,
    GetDeploymentsOutput,
    Blob
  >();

  constructor(readonly input: GetDeploymentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
