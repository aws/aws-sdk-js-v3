import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetApis } from "../model/GetApis";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApisInput } from "../types/GetApisInput";
import { GetApisOutput } from "../types/GetApisOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetApisInput";
export * from "../types/GetApisOutput";
export * from "../types/GetApisExceptionsUnion";

export class GetApisCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApisInput,
      OutputTypesUnion,
      GetApisOutput,
      ApiGatewayV2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetApis;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApisInput,
    GetApisOutput,
    Uint8Array
  >();

  constructor(readonly input: GetApisInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetApisInput, GetApisOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetApisInput, GetApisOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
