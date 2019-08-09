import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RenewOffering } from "../model/RenewOffering";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RenewOfferingInput } from "../types/RenewOfferingInput";
import { RenewOfferingOutput } from "../types/RenewOfferingOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/RenewOfferingInput";
export * from "../types/RenewOfferingOutput";
export * from "../types/RenewOfferingExceptionsUnion";

export class RenewOfferingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RenewOfferingInput,
      OutputTypesUnion,
      RenewOfferingOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = RenewOffering;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RenewOfferingInput,
    RenewOfferingOutput,
    Blob
  >();

  constructor(readonly input: RenewOfferingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<RenewOfferingInput, RenewOfferingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RenewOfferingInput, RenewOfferingOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
