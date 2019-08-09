import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetUsagePlans } from "../model/GetUsagePlans";
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
      Blob
    > {
  readonly model = GetUsagePlans;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUsagePlansInput,
    GetUsagePlansOutput,
    Blob
  >();

  constructor(readonly input: GetUsagePlansInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
