import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetGatewayResponse } from "../model/GetGatewayResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGatewayResponseInput } from "../types/GetGatewayResponseInput";
import { GetGatewayResponseOutput } from "../types/GetGatewayResponseOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetGatewayResponseInput";
export * from "../types/GetGatewayResponseOutput";
export * from "../types/GetGatewayResponseExceptionsUnion";

export class GetGatewayResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGatewayResponseInput,
      OutputTypesUnion,
      GetGatewayResponseOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = GetGatewayResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGatewayResponseInput,
    GetGatewayResponseOutput,
    Blob
  >();

  constructor(readonly input: GetGatewayResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetGatewayResponseInput,
    GetGatewayResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetGatewayResponseInput, GetGatewayResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
