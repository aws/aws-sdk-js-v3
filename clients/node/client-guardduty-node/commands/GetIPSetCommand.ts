import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetIPSet } from "../model/operations/GetIPSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIPSetInput } from "../types/GetIPSetInput";
import { GetIPSetOutput } from "../types/GetIPSetOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/GetIPSetInput";
export * from "../types/GetIPSetOutput";
export * from "../types/GetIPSetExceptionsUnion";

export class GetIPSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIPSetInput,
      OutputTypesUnion,
      GetIPSetOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetIPSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIPSetInput,
    GetIPSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetIPSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<GetIPSetInput, GetIPSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetIPSetInput, GetIPSetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
