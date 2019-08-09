import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMinuteUsage } from "../model/GetMinuteUsage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMinuteUsageInput } from "../types/GetMinuteUsageInput";
import { GetMinuteUsageOutput } from "../types/GetMinuteUsageOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/GetMinuteUsageInput";
export * from "../types/GetMinuteUsageOutput";
export * from "../types/GetMinuteUsageExceptionsUnion";

export class GetMinuteUsageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMinuteUsageInput,
      OutputTypesUnion,
      GetMinuteUsageOutput,
      GroundStationResolvedConfiguration,
      Blob
    > {
  readonly model = GetMinuteUsage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMinuteUsageInput,
    GetMinuteUsageOutput,
    Blob
  >();

  constructor(readonly input: GetMinuteUsageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMinuteUsageInput, GetMinuteUsageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMinuteUsageInput, GetMinuteUsageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
