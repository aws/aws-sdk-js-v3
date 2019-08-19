import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetUsage } from "../model/operations/GetUsage";
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
      _stream.Readable
    > {
  readonly model = GetUsage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUsageInput,
    GetUsageOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetUsageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
