import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSdk } from "../model/GetSdk";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSdkInput } from "../types/GetSdkInput";
import { GetSdkOutput } from "../types/GetSdkOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetSdkInput";
export * from "../types/GetSdkOutput";
export * from "../types/GetSdkExceptionsUnion";

export class GetSdkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSdkInput,
      OutputTypesUnion,
      GetSdkOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetSdk;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSdkInput,
    GetSdkOutput,
    Uint8Array
  >();

  constructor(readonly input: GetSdkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSdkInput, GetSdkOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSdkInput, GetSdkOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
