import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetGatewayGroup } from "../model/operations/GetGatewayGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGatewayGroupInput } from "../types/GetGatewayGroupInput";
import { GetGatewayGroupOutput } from "../types/GetGatewayGroupOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/GetGatewayGroupInput";
export * from "../types/GetGatewayGroupOutput";
export * from "../types/GetGatewayGroupExceptionsUnion";

export class GetGatewayGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGatewayGroupInput,
      OutputTypesUnion,
      GetGatewayGroupOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = GetGatewayGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGatewayGroupInput,
    GetGatewayGroupOutput,
    Blob
  >();

  constructor(readonly input: GetGatewayGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<GetGatewayGroupInput, GetGatewayGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetGatewayGroupInput, GetGatewayGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
