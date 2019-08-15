import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRestApis } from "../model/operations/GetRestApis";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRestApisInput } from "../types/GetRestApisInput";
import { GetRestApisOutput } from "../types/GetRestApisOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetRestApisInput";
export * from "../types/GetRestApisOutput";
export * from "../types/GetRestApisExceptionsUnion";

export class GetRestApisCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRestApisInput,
      OutputTypesUnion,
      GetRestApisOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = GetRestApis;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRestApisInput,
    GetRestApisOutput,
    Blob
  >();

  constructor(readonly input: GetRestApisInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRestApisInput, GetRestApisOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRestApisInput, GetRestApisOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
