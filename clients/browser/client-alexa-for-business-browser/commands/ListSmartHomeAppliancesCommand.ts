import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSmartHomeAppliances } from "../model/ListSmartHomeAppliances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSmartHomeAppliancesInput } from "../types/ListSmartHomeAppliancesInput";
import { ListSmartHomeAppliancesOutput } from "../types/ListSmartHomeAppliancesOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/ListSmartHomeAppliancesInput";
export * from "../types/ListSmartHomeAppliancesOutput";
export * from "../types/ListSmartHomeAppliancesExceptionsUnion";

export class ListSmartHomeAppliancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSmartHomeAppliancesInput,
      OutputTypesUnion,
      ListSmartHomeAppliancesOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = ListSmartHomeAppliances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSmartHomeAppliancesInput,
    ListSmartHomeAppliancesOutput,
    Blob
  >();

  constructor(readonly input: ListSmartHomeAppliancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSmartHomeAppliancesInput,
    ListSmartHomeAppliancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSmartHomeAppliancesInput, ListSmartHomeAppliancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
