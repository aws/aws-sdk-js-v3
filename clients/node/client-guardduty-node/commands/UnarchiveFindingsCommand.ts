import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UnarchiveFindings } from "../model/UnarchiveFindings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UnarchiveFindingsInput } from "../types/UnarchiveFindingsInput";
import { UnarchiveFindingsOutput } from "../types/UnarchiveFindingsOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/UnarchiveFindingsInput";
export * from "../types/UnarchiveFindingsOutput";
export * from "../types/UnarchiveFindingsExceptionsUnion";

export class UnarchiveFindingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UnarchiveFindingsInput,
      OutputTypesUnion,
      UnarchiveFindingsOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UnarchiveFindings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UnarchiveFindingsInput,
    UnarchiveFindingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: UnarchiveFindingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<UnarchiveFindingsInput, UnarchiveFindingsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UnarchiveFindingsInput, UnarchiveFindingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
