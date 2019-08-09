import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSessionToken } from "../model/GetSessionToken";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSessionTokenInput } from "../types/GetSessionTokenInput";
import { GetSessionTokenOutput } from "../types/GetSessionTokenOutput";
import { STSResolvedConfiguration } from "../STSConfiguration";
export * from "../types/GetSessionTokenInput";
export * from "../types/GetSessionTokenOutput";
export * from "../types/GetSessionTokenExceptionsUnion";

export class GetSessionTokenCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSessionTokenInput,
      OutputTypesUnion,
      GetSessionTokenOutput,
      STSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSessionToken;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSessionTokenInput,
    GetSessionTokenOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSessionTokenInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: STSResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSessionTokenInput, GetSessionTokenOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSessionTokenInput, GetSessionTokenOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
