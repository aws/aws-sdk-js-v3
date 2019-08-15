import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTargetsForSecurityProfile } from "../model/operations/ListTargetsForSecurityProfile";
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
      Blob
    > {
  readonly model = ListTargetsForSecurityProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTargetsForSecurityProfileInput,
    ListTargetsForSecurityProfileOutput,
    Blob
  >();

  constructor(readonly input: ListTargetsForSecurityProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
