import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegisterUsage } from "../model/operations/RegisterUsage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterUsageInput } from "../types/RegisterUsageInput";
import { RegisterUsageOutput } from "../types/RegisterUsageOutput";
import { MarketplaceMeteringResolvedConfiguration } from "../MarketplaceMeteringConfiguration";
export * from "../types/RegisterUsageInput";
export * from "../types/RegisterUsageOutput";
export * from "../types/RegisterUsageExceptionsUnion";

export class RegisterUsageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterUsageInput,
      OutputTypesUnion,
      RegisterUsageOutput,
      MarketplaceMeteringResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RegisterUsage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterUsageInput,
    RegisterUsageOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegisterUsageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MarketplaceMeteringResolvedConfiguration
  ): __aws_sdk_types.Handler<RegisterUsageInput, RegisterUsageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterUsageInput, RegisterUsageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
