import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateGateway } from "../model/UpdateGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGatewayInput } from "../types/UpdateGatewayInput";
import { UpdateGatewayOutput } from "../types/UpdateGatewayOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/UpdateGatewayInput";
export * from "../types/UpdateGatewayOutput";
export * from "../types/UpdateGatewayExceptionsUnion";

export class UpdateGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGatewayInput,
      OutputTypesUnion,
      UpdateGatewayOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGatewayInput,
    UpdateGatewayOutput,
    Blob
  >();

  constructor(readonly input: UpdateGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateGatewayInput, UpdateGatewayOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateGatewayInput, UpdateGatewayOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
