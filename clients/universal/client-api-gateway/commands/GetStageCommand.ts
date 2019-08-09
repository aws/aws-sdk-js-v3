import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetStage } from "../model/GetStage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetStageInput } from "../types/GetStageInput";
import { GetStageOutput } from "../types/GetStageOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetStageInput";
export * from "../types/GetStageOutput";
export * from "../types/GetStageExceptionsUnion";

export class GetStageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetStageInput,
      OutputTypesUnion,
      GetStageOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetStage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetStageInput,
    GetStageOutput,
    Uint8Array
  >();

  constructor(readonly input: GetStageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetStageInput, GetStageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetStageInput, GetStageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
