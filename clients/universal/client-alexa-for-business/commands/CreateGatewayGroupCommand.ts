import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateGatewayGroup } from "../model/CreateGatewayGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateGatewayGroupInput } from "../types/CreateGatewayGroupInput";
import { CreateGatewayGroupOutput } from "../types/CreateGatewayGroupOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/CreateGatewayGroupInput";
export * from "../types/CreateGatewayGroupOutput";
export * from "../types/CreateGatewayGroupExceptionsUnion";

export class CreateGatewayGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateGatewayGroupInput,
      OutputTypesUnion,
      CreateGatewayGroupOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateGatewayGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateGatewayGroupInput,
    CreateGatewayGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateGatewayGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateGatewayGroupInput,
    CreateGatewayGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateGatewayGroupInput, CreateGatewayGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
