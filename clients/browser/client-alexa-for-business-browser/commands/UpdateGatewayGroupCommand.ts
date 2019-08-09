import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateGatewayGroup } from "../model/UpdateGatewayGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGatewayGroupInput } from "../types/UpdateGatewayGroupInput";
import { UpdateGatewayGroupOutput } from "../types/UpdateGatewayGroupOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/UpdateGatewayGroupInput";
export * from "../types/UpdateGatewayGroupOutput";
export * from "../types/UpdateGatewayGroupExceptionsUnion";

export class UpdateGatewayGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGatewayGroupInput,
      OutputTypesUnion,
      UpdateGatewayGroupOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateGatewayGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGatewayGroupInput,
    UpdateGatewayGroupOutput,
    Blob
  >();

  constructor(readonly input: UpdateGatewayGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateGatewayGroupInput,
    UpdateGatewayGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateGatewayGroupInput, UpdateGatewayGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
