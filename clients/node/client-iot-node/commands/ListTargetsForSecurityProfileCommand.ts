import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTargetsForSecurityProfile } from "../model/ListTargetsForSecurityProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTargetsForSecurityProfileInput } from "../types/ListTargetsForSecurityProfileInput";
import { ListTargetsForSecurityProfileOutput } from "../types/ListTargetsForSecurityProfileOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListTargetsForSecurityProfileInput";
export * from "../types/ListTargetsForSecurityProfileOutput";
export * from "../types/ListTargetsForSecurityProfileExceptionsUnion";

export class ListTargetsForSecurityProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTargetsForSecurityProfileInput,
      OutputTypesUnion,
      ListTargetsForSecurityProfileOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTargetsForSecurityProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTargetsForSecurityProfileInput,
    ListTargetsForSecurityProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTargetsForSecurityProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTargetsForSecurityProfileInput,
    ListTargetsForSecurityProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListTargetsForSecurityProfileInput,
        ListTargetsForSecurityProfileOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
