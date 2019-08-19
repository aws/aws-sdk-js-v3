import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutConfigurationSetReputationOptions } from "../model/operations/PutConfigurationSetReputationOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutConfigurationSetReputationOptionsInput } from "../types/PutConfigurationSetReputationOptionsInput";
import { PutConfigurationSetReputationOptionsOutput } from "../types/PutConfigurationSetReputationOptionsOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/PutConfigurationSetReputationOptionsInput";
export * from "../types/PutConfigurationSetReputationOptionsOutput";
export * from "../types/PutConfigurationSetReputationOptionsExceptionsUnion";

export class PutConfigurationSetReputationOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutConfigurationSetReputationOptionsInput,
      OutputTypesUnion,
      PutConfigurationSetReputationOptionsOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutConfigurationSetReputationOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutConfigurationSetReputationOptionsInput,
    PutConfigurationSetReputationOptionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutConfigurationSetReputationOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutConfigurationSetReputationOptionsInput,
    PutConfigurationSetReputationOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutConfigurationSetReputationOptionsInput,
        PutConfigurationSetReputationOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
