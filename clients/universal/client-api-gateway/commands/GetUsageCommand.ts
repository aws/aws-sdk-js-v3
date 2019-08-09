import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetUsage } from "../model/GetUsage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUsageInput } from "../types/GetUsageInput";
import { GetUsageOutput } from "../types/GetUsageOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetUsageInput";
export * from "../types/GetUsageOutput";
export * from "../types/GetUsageExceptionsUnion";

export class GetUsageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUsageInput,
      OutputTypesUnion,
      GetUsageOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetUsage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUsageInput,
    GetUsageOutput,
    Uint8Array
  >();

  constructor(readonly input: GetUsageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUsageInput, GetUsageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUsageInput, GetUsageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
