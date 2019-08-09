import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetChangeTokenStatus } from "../model/GetChangeTokenStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetChangeTokenStatusInput } from "../types/GetChangeTokenStatusInput";
import { GetChangeTokenStatusOutput } from "../types/GetChangeTokenStatusOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/GetChangeTokenStatusInput";
export * from "../types/GetChangeTokenStatusOutput";
export * from "../types/GetChangeTokenStatusExceptionsUnion";

export class GetChangeTokenStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetChangeTokenStatusInput,
      OutputTypesUnion,
      GetChangeTokenStatusOutput,
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetChangeTokenStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetChangeTokenStatusInput,
    GetChangeTokenStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetChangeTokenStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetChangeTokenStatusInput,
    GetChangeTokenStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetChangeTokenStatusInput, GetChangeTokenStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
