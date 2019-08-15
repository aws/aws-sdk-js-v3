import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetChangeToken } from "../model/operations/GetChangeToken";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetChangeTokenInput } from "../types/GetChangeTokenInput";
import { GetChangeTokenOutput } from "../types/GetChangeTokenOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/GetChangeTokenInput";
export * from "../types/GetChangeTokenOutput";
export * from "../types/GetChangeTokenExceptionsUnion";

export class GetChangeTokenCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetChangeTokenInput,
      OutputTypesUnion,
      GetChangeTokenOutput,
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetChangeToken;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetChangeTokenInput,
    GetChangeTokenOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetChangeTokenInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<GetChangeTokenInput, GetChangeTokenOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetChangeTokenInput, GetChangeTokenOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
