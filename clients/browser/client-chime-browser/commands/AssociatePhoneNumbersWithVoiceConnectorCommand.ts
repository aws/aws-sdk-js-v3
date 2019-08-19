import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociatePhoneNumbersWithVoiceConnector } from "../model/operations/AssociatePhoneNumbersWithVoiceConnector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociatePhoneNumbersWithVoiceConnectorInput } from "../types/AssociatePhoneNumbersWithVoiceConnectorInput";
import { AssociatePhoneNumbersWithVoiceConnectorOutput } from "../types/AssociatePhoneNumbersWithVoiceConnectorOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/AssociatePhoneNumbersWithVoiceConnectorInput";
export * from "../types/AssociatePhoneNumbersWithVoiceConnectorOutput";
export * from "../types/AssociatePhoneNumbersWithVoiceConnectorExceptionsUnion";

export class AssociatePhoneNumbersWithVoiceConnectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociatePhoneNumbersWithVoiceConnectorInput,
      OutputTypesUnion,
      AssociatePhoneNumbersWithVoiceConnectorOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = AssociatePhoneNumbersWithVoiceConnector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociatePhoneNumbersWithVoiceConnectorInput,
    AssociatePhoneNumbersWithVoiceConnectorOutput,
    Blob
  >();

  constructor(readonly input: AssociatePhoneNumbersWithVoiceConnectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociatePhoneNumbersWithVoiceConnectorInput,
    AssociatePhoneNumbersWithVoiceConnectorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociatePhoneNumbersWithVoiceConnectorInput,
        AssociatePhoneNumbersWithVoiceConnectorOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
