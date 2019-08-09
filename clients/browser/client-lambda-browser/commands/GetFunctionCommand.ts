import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetFunction } from "../model/GetFunction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFunctionInput } from "../types/GetFunctionInput";
import { GetFunctionOutput } from "../types/GetFunctionOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/GetFunctionInput";
export * from "../types/GetFunctionOutput";
export * from "../types/GetFunctionExceptionsUnion";

export class GetFunctionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFunctionInput,
      OutputTypesUnion,
      GetFunctionOutput,
      LambdaResolvedConfiguration,
      Blob
    > {
  readonly model = GetFunction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFunctionInput,
    GetFunctionOutput,
    Blob
  >();

  constructor(readonly input: GetFunctionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<GetFunctionInput, GetFunctionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetFunctionInput, GetFunctionOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
