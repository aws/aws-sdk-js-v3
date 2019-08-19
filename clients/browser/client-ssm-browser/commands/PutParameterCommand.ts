import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutParameter } from "../model/operations/PutParameter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutParameterInput } from "../types/PutParameterInput";
import { PutParameterOutput } from "../types/PutParameterOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/PutParameterInput";
export * from "../types/PutParameterOutput";
export * from "../types/PutParameterExceptionsUnion";

export class PutParameterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutParameterInput,
      OutputTypesUnion,
      PutParameterOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = PutParameter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutParameterInput,
    PutParameterOutput,
    Blob
  >();

  constructor(readonly input: PutParameterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<PutParameterInput, PutParameterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutParameterInput, PutParameterOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
