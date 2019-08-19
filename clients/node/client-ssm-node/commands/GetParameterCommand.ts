import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetParameter } from "../model/operations/GetParameter";
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
      _stream.Readable
    > {
  readonly model = GetParameter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetParameterInput,
    GetParameterOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetParameterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
