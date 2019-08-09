import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetModels } from "../model/GetModels";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetModelsInput } from "../types/GetModelsInput";
import { GetModelsOutput } from "../types/GetModelsOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetModelsInput";
export * from "../types/GetModelsOutput";
export * from "../types/GetModelsExceptionsUnion";

export class GetModelsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetModelsInput,
      OutputTypesUnion,
      GetModelsOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetModels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetModelsInput,
    GetModelsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetModelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetModelsInput, GetModelsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetModelsInput, GetModelsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
