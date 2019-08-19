import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateGatewayGroup } from "../model/operations/UpdateGatewayGroup";
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
      _stream.Readable
    > {
  readonly model = UpdateGatewayGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGatewayGroupInput,
    UpdateGatewayGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateGatewayGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
