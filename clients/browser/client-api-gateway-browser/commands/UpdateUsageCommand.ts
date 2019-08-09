import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateUsage } from "../model/UpdateUsage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateUsageInput } from "../types/UpdateUsageInput";
import { UpdateUsageOutput } from "../types/UpdateUsageOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateUsageInput";
export * from "../types/UpdateUsageOutput";
export * from "../types/UpdateUsageExceptionsUnion";

export class UpdateUsageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateUsageInput,
      OutputTypesUnion,
      UpdateUsageOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateUsage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUsageInput,
    UpdateUsageOutput,
    Blob
  >();

  constructor(readonly input: UpdateUsageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateUsageInput, UpdateUsageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateUsageInput, UpdateUsageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
