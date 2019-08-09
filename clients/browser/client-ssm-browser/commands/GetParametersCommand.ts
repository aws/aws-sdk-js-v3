import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetParameters } from "../model/GetParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetParametersInput } from "../types/GetParametersInput";
import { GetParametersOutput } from "../types/GetParametersOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetParametersInput";
export * from "../types/GetParametersOutput";
export * from "../types/GetParametersExceptionsUnion";

export class GetParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetParametersInput,
      OutputTypesUnion,
      GetParametersOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = GetParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetParametersInput,
    GetParametersOutput,
    Blob
  >();

  constructor(readonly input: GetParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetParametersInput, GetParametersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetParametersInput, GetParametersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
