import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetParameter } from "../model/GetParameter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetParameterInput } from "../types/GetParameterInput";
import { GetParameterOutput } from "../types/GetParameterOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetParameterInput";
export * from "../types/GetParameterOutput";
export * from "../types/GetParameterExceptionsUnion";

export class GetParameterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetParameterInput,
      OutputTypesUnion,
      GetParameterOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetParameter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetParameterInput,
    GetParameterOutput,
    Uint8Array
  >();

  constructor(readonly input: GetParameterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetParameterInput, GetParameterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetParameterInput, GetParameterOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
