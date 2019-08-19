import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociatePhoneNumbersFromVoiceConnector } from "../model/operations/DisassociatePhoneNumbersFromVoiceConnector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociatePhoneNumbersFromVoiceConnectorInput } from "../types/DisassociatePhoneNumbersFromVoiceConnectorInput";
import { DisassociatePhoneNumbersFromVoiceConnectorOutput } from "../types/DisassociatePhoneNumbersFromVoiceConnectorOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/DisassociatePhoneNumbersFromVoiceConnectorInput";
export * from "../types/DisassociatePhoneNumbersFromVoiceConnectorOutput";
export * from "../types/DisassociatePhoneNumbersFromVoiceConnectorExceptionsUnion";

export class DisassociatePhoneNumbersFromVoiceConnectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociatePhoneNumbersFromVoiceConnectorInput,
      OutputTypesUnion,
      DisassociatePhoneNumbersFromVoiceConnectorOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociatePhoneNumbersFromVoiceConnector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociatePhoneNumbersFromVoiceConnectorInput,
    DisassociatePhoneNumbersFromVoiceConnectorOutput,
    Blob
  >();

  constructor(
    readonly input: DisassociatePhoneNumbersFromVoiceConnectorInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociatePhoneNumbersFromVoiceConnectorInput,
    DisassociatePhoneNumbersFromVoiceConnectorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociatePhoneNumbersFromVoiceConnectorInput,
        DisassociatePhoneNumbersFromVoiceConnectorOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
