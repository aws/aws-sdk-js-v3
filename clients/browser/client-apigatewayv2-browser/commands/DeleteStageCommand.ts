import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteStage } from "../model/DeleteStage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteStageInput } from "../types/DeleteStageInput";
import { DeleteStageOutput } from "../types/DeleteStageOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/DeleteStageInput";
export * from "../types/DeleteStageOutput";
export * from "../types/DeleteStageExceptionsUnion";

export class DeleteStageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteStageInput,
      OutputTypesUnion,
      DeleteStageOutput,
      ApiGatewayV2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteStage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteStageInput,
    DeleteStageOutput,
    Blob
  >();

  constructor(readonly input: DeleteStageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteStageInput, DeleteStageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteStageInput, DeleteStageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
