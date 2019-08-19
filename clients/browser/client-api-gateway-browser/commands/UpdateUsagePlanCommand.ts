import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateUsagePlan } from "../model/operations/UpdateUsagePlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateUsagePlanInput } from "../types/UpdateUsagePlanInput";
import { UpdateUsagePlanOutput } from "../types/UpdateUsagePlanOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateUsagePlanInput";
export * from "../types/UpdateUsagePlanOutput";
export * from "../types/UpdateUsagePlanExceptionsUnion";

export class UpdateUsagePlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateUsagePlanInput,
      OutputTypesUnion,
      UpdateUsagePlanOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateUsagePlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUsagePlanInput,
    UpdateUsagePlanOutput,
    Blob
  >();

  constructor(readonly input: UpdateUsagePlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateUsagePlanInput, UpdateUsagePlanOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateUsagePlanInput, UpdateUsagePlanOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
