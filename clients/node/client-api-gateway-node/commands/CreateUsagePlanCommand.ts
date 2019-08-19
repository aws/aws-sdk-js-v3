import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateUsagePlan } from "../model/operations/CreateUsagePlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateUsagePlanInput } from "../types/CreateUsagePlanInput";
import { CreateUsagePlanOutput } from "../types/CreateUsagePlanOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/CreateUsagePlanInput";
export * from "../types/CreateUsagePlanOutput";
export * from "../types/CreateUsagePlanExceptionsUnion";

export class CreateUsagePlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateUsagePlanInput,
      OutputTypesUnion,
      CreateUsagePlanOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateUsagePlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateUsagePlanInput,
    CreateUsagePlanOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateUsagePlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateUsagePlanInput, CreateUsagePlanOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateUsagePlanInput, CreateUsagePlanOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
