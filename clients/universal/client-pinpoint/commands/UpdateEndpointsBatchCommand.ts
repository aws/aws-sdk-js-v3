import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateEndpointsBatch } from "../model/UpdateEndpointsBatch";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateEndpointsBatchInput } from "../types/UpdateEndpointsBatchInput";
import { UpdateEndpointsBatchOutput } from "../types/UpdateEndpointsBatchOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateEndpointsBatchInput";
export * from "../types/UpdateEndpointsBatchOutput";
export * from "../types/UpdateEndpointsBatchExceptionsUnion";

export class UpdateEndpointsBatchCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateEndpointsBatchInput,
      OutputTypesUnion,
      UpdateEndpointsBatchOutput,
      PinpointResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateEndpointsBatch;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateEndpointsBatchInput,
    UpdateEndpointsBatchOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateEndpointsBatchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateEndpointsBatchInput,
    UpdateEndpointsBatchOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateEndpointsBatchInput, UpdateEndpointsBatchOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
