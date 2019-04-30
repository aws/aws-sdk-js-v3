import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateEndpoint } from "../model/UpdateEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateEndpointInput } from "../types/UpdateEndpointInput";
import { UpdateEndpointOutput } from "../types/UpdateEndpointOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateEndpointInput";
export * from "../types/UpdateEndpointOutput";
export * from "../types/UpdateEndpointExceptionsUnion";

export class UpdateEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateEndpointInput,
      OutputTypesUnion,
      UpdateEndpointOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateEndpointInput,
    UpdateEndpointOutput,
    Blob
  >();

  constructor(readonly input: UpdateEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateEndpointInput, UpdateEndpointOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: UpdateEndpoint
    };

    return stack.resolve(
      handler<UpdateEndpointInput, UpdateEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
