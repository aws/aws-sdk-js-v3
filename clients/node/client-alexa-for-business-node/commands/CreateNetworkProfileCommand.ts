import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateNetworkProfile } from "../model/operations/CreateNetworkProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNetworkProfileInput } from "../types/CreateNetworkProfileInput";
import { CreateNetworkProfileOutput } from "../types/CreateNetworkProfileOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/CreateNetworkProfileInput";
export * from "../types/CreateNetworkProfileOutput";
export * from "../types/CreateNetworkProfileExceptionsUnion";

export class CreateNetworkProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNetworkProfileInput,
      OutputTypesUnion,
      CreateNetworkProfileOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateNetworkProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNetworkProfileInput,
    CreateNetworkProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateNetworkProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateNetworkProfileInput,
    CreateNetworkProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateNetworkProfileInput, CreateNetworkProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
