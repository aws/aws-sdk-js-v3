import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetModel } from "../model/GetModel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetModelInput } from "../types/GetModelInput";
import { GetModelOutput } from "../types/GetModelOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetModelInput";
export * from "../types/GetModelOutput";
export * from "../types/GetModelExceptionsUnion";

export class GetModelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetModelInput,
      OutputTypesUnion,
      GetModelOutput,
      ApiGatewayV2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetModel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetModelInput,
    GetModelOutput,
    Uint8Array
  >();

  constructor(readonly input: GetModelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetModelInput, GetModelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetModelInput, GetModelOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
