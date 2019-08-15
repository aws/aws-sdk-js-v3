import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetOfferingStatus } from "../model/operations/GetOfferingStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetOfferingStatusInput } from "../types/GetOfferingStatusInput";
import { GetOfferingStatusOutput } from "../types/GetOfferingStatusOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/GetOfferingStatusInput";
export * from "../types/GetOfferingStatusOutput";
export * from "../types/GetOfferingStatusExceptionsUnion";

export class GetOfferingStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetOfferingStatusInput,
      OutputTypesUnion,
      GetOfferingStatusOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = GetOfferingStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetOfferingStatusInput,
    GetOfferingStatusOutput,
    Blob
  >();

  constructor(readonly input: GetOfferingStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<GetOfferingStatusInput, GetOfferingStatusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetOfferingStatusInput, GetOfferingStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
