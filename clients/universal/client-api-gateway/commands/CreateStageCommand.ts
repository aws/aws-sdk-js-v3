import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateStage } from "../model/CreateStage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateStageInput } from "../types/CreateStageInput";
import { CreateStageOutput } from "../types/CreateStageOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/CreateStageInput";
export * from "../types/CreateStageOutput";
export * from "../types/CreateStageExceptionsUnion";

export class CreateStageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateStageInput,
      OutputTypesUnion,
      CreateStageOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateStage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateStageInput,
    CreateStageOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateStageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateStageInput, CreateStageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateStageInput, CreateStageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
