import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateGatewayInformation } from "../model/UpdateGatewayInformation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGatewayInformationInput } from "../types/UpdateGatewayInformationInput";
import { UpdateGatewayInformationOutput } from "../types/UpdateGatewayInformationOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/UpdateGatewayInformationInput";
export * from "../types/UpdateGatewayInformationOutput";
export * from "../types/UpdateGatewayInformationExceptionsUnion";

export class UpdateGatewayInformationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGatewayInformationInput,
      OutputTypesUnion,
      UpdateGatewayInformationOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateGatewayInformation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGatewayInformationInput,
    UpdateGatewayInformationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateGatewayInformationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateGatewayInformationInput,
    UpdateGatewayInformationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateGatewayInformationInput, UpdateGatewayInformationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
