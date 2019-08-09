import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteNetworkProfile } from "../model/DeleteNetworkProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNetworkProfileInput } from "../types/DeleteNetworkProfileInput";
import { DeleteNetworkProfileOutput } from "../types/DeleteNetworkProfileOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DeleteNetworkProfileInput";
export * from "../types/DeleteNetworkProfileOutput";
export * from "../types/DeleteNetworkProfileExceptionsUnion";

export class DeleteNetworkProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNetworkProfileInput,
      OutputTypesUnion,
      DeleteNetworkProfileOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteNetworkProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNetworkProfileInput,
    DeleteNetworkProfileOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteNetworkProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteNetworkProfileInput,
    DeleteNetworkProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteNetworkProfileInput, DeleteNetworkProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
