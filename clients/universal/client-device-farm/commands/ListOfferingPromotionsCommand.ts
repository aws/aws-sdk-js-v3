import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListOfferingPromotions } from "../model/ListOfferingPromotions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOfferingPromotionsInput } from "../types/ListOfferingPromotionsInput";
import { ListOfferingPromotionsOutput } from "../types/ListOfferingPromotionsOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListOfferingPromotionsInput";
export * from "../types/ListOfferingPromotionsOutput";
export * from "../types/ListOfferingPromotionsExceptionsUnion";

export class ListOfferingPromotionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOfferingPromotionsInput,
      OutputTypesUnion,
      ListOfferingPromotionsOutput,
      DeviceFarmResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListOfferingPromotions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOfferingPromotionsInput,
    ListOfferingPromotionsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListOfferingPromotionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListOfferingPromotionsInput,
    ListOfferingPromotionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListOfferingPromotionsInput, ListOfferingPromotionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
