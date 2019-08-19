import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetUsagePlan } from "../model/operations/GetUsagePlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUsagePlanInput } from "../types/GetUsagePlanInput";
import { GetUsagePlanOutput } from "../types/GetUsagePlanOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetUsagePlanInput";
export * from "../types/GetUsagePlanOutput";
export * from "../types/GetUsagePlanExceptionsUnion";

export class GetUsagePlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUsagePlanInput,
      OutputTypesUnion,
      GetUsagePlanOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetUsagePlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUsagePlanInput,
    GetUsagePlanOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetUsagePlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUsagePlanInput, GetUsagePlanOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUsagePlanInput, GetUsagePlanOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
