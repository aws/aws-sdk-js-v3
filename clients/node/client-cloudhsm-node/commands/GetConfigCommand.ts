import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetConfig } from "../model/operations/GetConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetConfigInput } from "../types/GetConfigInput";
import { GetConfigOutput } from "../types/GetConfigOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/GetConfigInput";
export * from "../types/GetConfigOutput";
export * from "../types/GetConfigExceptionsUnion";

export class GetConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetConfigInput,
      OutputTypesUnion,
      GetConfigOutput,
      CloudHSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetConfigInput,
    GetConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetConfigInput, GetConfigOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetConfigInput, GetConfigOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
