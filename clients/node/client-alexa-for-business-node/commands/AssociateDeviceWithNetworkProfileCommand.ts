import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateDeviceWithNetworkProfile } from "../model/AssociateDeviceWithNetworkProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateDeviceWithNetworkProfileInput } from "../types/AssociateDeviceWithNetworkProfileInput";
import { AssociateDeviceWithNetworkProfileOutput } from "../types/AssociateDeviceWithNetworkProfileOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/AssociateDeviceWithNetworkProfileInput";
export * from "../types/AssociateDeviceWithNetworkProfileOutput";
export * from "../types/AssociateDeviceWithNetworkProfileExceptionsUnion";

export class AssociateDeviceWithNetworkProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateDeviceWithNetworkProfileInput,
      OutputTypesUnion,
      AssociateDeviceWithNetworkProfileOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateDeviceWithNetworkProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateDeviceWithNetworkProfileInput,
    AssociateDeviceWithNetworkProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateDeviceWithNetworkProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateDeviceWithNetworkProfileInput,
    AssociateDeviceWithNetworkProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateDeviceWithNetworkProfileInput,
        AssociateDeviceWithNetworkProfileOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
