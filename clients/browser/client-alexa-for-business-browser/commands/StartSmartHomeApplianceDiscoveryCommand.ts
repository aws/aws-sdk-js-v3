import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartSmartHomeApplianceDiscovery } from "../model/StartSmartHomeApplianceDiscovery";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartSmartHomeApplianceDiscoveryInput } from "../types/StartSmartHomeApplianceDiscoveryInput";
import { StartSmartHomeApplianceDiscoveryOutput } from "../types/StartSmartHomeApplianceDiscoveryOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/StartSmartHomeApplianceDiscoveryInput";
export * from "../types/StartSmartHomeApplianceDiscoveryOutput";
export * from "../types/StartSmartHomeApplianceDiscoveryExceptionsUnion";

export class StartSmartHomeApplianceDiscoveryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartSmartHomeApplianceDiscoveryInput,
      OutputTypesUnion,
      StartSmartHomeApplianceDiscoveryOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = StartSmartHomeApplianceDiscovery;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartSmartHomeApplianceDiscoveryInput,
    StartSmartHomeApplianceDiscoveryOutput,
    Blob
  >();

  constructor(readonly input: StartSmartHomeApplianceDiscoveryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartSmartHomeApplianceDiscoveryInput,
    StartSmartHomeApplianceDiscoveryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartSmartHomeApplianceDiscoveryInput,
        StartSmartHomeApplianceDiscoveryOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
