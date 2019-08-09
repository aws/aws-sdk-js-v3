import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateGatewaySoftwareNow } from "../model/UpdateGatewaySoftwareNow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGatewaySoftwareNowInput } from "../types/UpdateGatewaySoftwareNowInput";
import { UpdateGatewaySoftwareNowOutput } from "../types/UpdateGatewaySoftwareNowOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/UpdateGatewaySoftwareNowInput";
export * from "../types/UpdateGatewaySoftwareNowOutput";
export * from "../types/UpdateGatewaySoftwareNowExceptionsUnion";

export class UpdateGatewaySoftwareNowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGatewaySoftwareNowInput,
      OutputTypesUnion,
      UpdateGatewaySoftwareNowOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateGatewaySoftwareNow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGatewaySoftwareNowInput,
    UpdateGatewaySoftwareNowOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateGatewaySoftwareNowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateGatewaySoftwareNowInput,
    UpdateGatewaySoftwareNowOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateGatewaySoftwareNowInput, UpdateGatewaySoftwareNowOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
