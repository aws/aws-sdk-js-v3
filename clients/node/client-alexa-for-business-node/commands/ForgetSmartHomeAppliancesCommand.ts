import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ForgetSmartHomeAppliances } from "../model/ForgetSmartHomeAppliances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ForgetSmartHomeAppliancesInput } from "../types/ForgetSmartHomeAppliancesInput";
import { ForgetSmartHomeAppliancesOutput } from "../types/ForgetSmartHomeAppliancesOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/ForgetSmartHomeAppliancesInput";
export * from "../types/ForgetSmartHomeAppliancesOutput";
export * from "../types/ForgetSmartHomeAppliancesExceptionsUnion";

export class ForgetSmartHomeAppliancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ForgetSmartHomeAppliancesInput,
      OutputTypesUnion,
      ForgetSmartHomeAppliancesOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ForgetSmartHomeAppliances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ForgetSmartHomeAppliancesInput,
    ForgetSmartHomeAppliancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ForgetSmartHomeAppliancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ForgetSmartHomeAppliancesInput,
    ForgetSmartHomeAppliancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ForgetSmartHomeAppliancesInput, ForgetSmartHomeAppliancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
