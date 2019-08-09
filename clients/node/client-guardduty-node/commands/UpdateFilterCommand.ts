import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateFilter } from "../model/UpdateFilter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFilterInput } from "../types/UpdateFilterInput";
import { UpdateFilterOutput } from "../types/UpdateFilterOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/UpdateFilterInput";
export * from "../types/UpdateFilterOutput";
export * from "../types/UpdateFilterExceptionsUnion";

export class UpdateFilterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFilterInput,
      OutputTypesUnion,
      UpdateFilterOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateFilter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFilterInput,
    UpdateFilterOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateFilterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateFilterInput, UpdateFilterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFilterInput, UpdateFilterOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
