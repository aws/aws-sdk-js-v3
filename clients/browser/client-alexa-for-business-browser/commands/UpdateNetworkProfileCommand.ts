import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateNetworkProfile } from "../model/operations/UpdateNetworkProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateNetworkProfileInput } from "../types/UpdateNetworkProfileInput";
import { UpdateNetworkProfileOutput } from "../types/UpdateNetworkProfileOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/UpdateNetworkProfileInput";
export * from "../types/UpdateNetworkProfileOutput";
export * from "../types/UpdateNetworkProfileExceptionsUnion";

export class UpdateNetworkProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateNetworkProfileInput,
      OutputTypesUnion,
      UpdateNetworkProfileOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateNetworkProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateNetworkProfileInput,
    UpdateNetworkProfileOutput,
    Blob
  >();

  constructor(readonly input: UpdateNetworkProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateNetworkProfileInput,
    UpdateNetworkProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateNetworkProfileInput, UpdateNetworkProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
