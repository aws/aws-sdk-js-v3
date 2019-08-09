import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAggregateResourceConfig } from "../model/GetAggregateResourceConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAggregateResourceConfigInput } from "../types/GetAggregateResourceConfigInput";
import { GetAggregateResourceConfigOutput } from "../types/GetAggregateResourceConfigOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/GetAggregateResourceConfigInput";
export * from "../types/GetAggregateResourceConfigOutput";
export * from "../types/GetAggregateResourceConfigExceptionsUnion";

export class GetAggregateResourceConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAggregateResourceConfigInput,
      OutputTypesUnion,
      GetAggregateResourceConfigOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetAggregateResourceConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAggregateResourceConfigInput,
    GetAggregateResourceConfigOutput,
    Uint8Array
  >();

  constructor(readonly input: GetAggregateResourceConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAggregateResourceConfigInput,
    GetAggregateResourceConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetAggregateResourceConfigInput,
        GetAggregateResourceConfigOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
