import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSnowballUsage } from "../model/operations/GetSnowballUsage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSnowballUsageInput } from "../types/GetSnowballUsageInput";
import { GetSnowballUsageOutput } from "../types/GetSnowballUsageOutput";
import { SnowballResolvedConfiguration } from "../SnowballConfiguration";
export * from "../types/GetSnowballUsageInput";
export * from "../types/GetSnowballUsageOutput";
export * from "../types/GetSnowballUsageExceptionsUnion";

export class GetSnowballUsageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSnowballUsageInput,
      OutputTypesUnion,
      GetSnowballUsageOutput,
      SnowballResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSnowballUsage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSnowballUsageInput,
    GetSnowballUsageOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSnowballUsageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SnowballResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSnowballUsageInput, GetSnowballUsageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSnowballUsageInput, GetSnowballUsageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
