import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListOfferings } from "../model/operations/ListOfferings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOfferingsInput } from "../types/ListOfferingsInput";
import { ListOfferingsOutput } from "../types/ListOfferingsOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListOfferingsInput";
export * from "../types/ListOfferingsOutput";
export * from "../types/ListOfferingsExceptionsUnion";

export class ListOfferingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOfferingsInput,
      OutputTypesUnion,
      ListOfferingsOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = ListOfferings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOfferingsInput,
    ListOfferingsOutput,
    Blob
  >();

  constructor(readonly input: ListOfferingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<ListOfferingsInput, ListOfferingsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListOfferingsInput, ListOfferingsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
