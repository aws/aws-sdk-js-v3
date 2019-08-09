import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMethod } from "../model/GetMethod";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMethodInput } from "../types/GetMethodInput";
import { GetMethodOutput } from "../types/GetMethodOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetMethodInput";
export * from "../types/GetMethodOutput";
export * from "../types/GetMethodExceptionsUnion";

export class GetMethodCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMethodInput,
      OutputTypesUnion,
      GetMethodOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetMethod;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMethodInput,
    GetMethodOutput,
    Uint8Array
  >();

  constructor(readonly input: GetMethodInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMethodInput, GetMethodOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMethodInput, GetMethodOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
