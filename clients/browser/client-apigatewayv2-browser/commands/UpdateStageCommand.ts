import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateStage } from "../model/operations/UpdateStage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateStageInput } from "../types/UpdateStageInput";
import { UpdateStageOutput } from "../types/UpdateStageOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/UpdateStageInput";
export * from "../types/UpdateStageOutput";
export * from "../types/UpdateStageExceptionsUnion";

export class UpdateStageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateStageInput,
      OutputTypesUnion,
      UpdateStageOutput,
      ApiGatewayV2ResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateStage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateStageInput,
    UpdateStageOutput,
    Blob
  >();

  constructor(readonly input: UpdateStageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateStageInput, UpdateStageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateStageInput, UpdateStageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
