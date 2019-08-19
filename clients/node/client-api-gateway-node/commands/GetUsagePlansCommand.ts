import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetUsagePlans } from "../model/operations/GetUsagePlans";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUsagePlansInput } from "../types/GetUsagePlansInput";
import { GetUsagePlansOutput } from "../types/GetUsagePlansOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetUsagePlansInput";
export * from "../types/GetUsagePlansOutput";
export * from "../types/GetUsagePlansExceptionsUnion";

export class GetUsagePlansCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUsagePlansInput,
      OutputTypesUnion,
      GetUsagePlansOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetUsagePlans;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUsagePlansInput,
    GetUsagePlansOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetUsagePlansInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUsagePlansInput, GetUsagePlansOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUsagePlansInput, GetUsagePlansOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
