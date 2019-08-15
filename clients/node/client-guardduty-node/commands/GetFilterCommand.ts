import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetFilter } from "../model/operations/GetFilter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFilterInput } from "../types/GetFilterInput";
import { GetFilterOutput } from "../types/GetFilterOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/GetFilterInput";
export * from "../types/GetFilterOutput";
export * from "../types/GetFilterExceptionsUnion";

export class GetFilterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFilterInput,
      OutputTypesUnion,
      GetFilterOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetFilter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFilterInput,
    GetFilterOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetFilterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<GetFilterInput, GetFilterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetFilterInput, GetFilterOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
