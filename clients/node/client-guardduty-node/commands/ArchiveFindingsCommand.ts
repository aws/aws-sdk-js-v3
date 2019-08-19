import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ArchiveFindings } from "../model/operations/ArchiveFindings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ArchiveFindingsInput } from "../types/ArchiveFindingsInput";
import { ArchiveFindingsOutput } from "../types/ArchiveFindingsOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/ArchiveFindingsInput";
export * from "../types/ArchiveFindingsOutput";
export * from "../types/ArchiveFindingsExceptionsUnion";

export class ArchiveFindingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ArchiveFindingsInput,
      OutputTypesUnion,
      ArchiveFindingsOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ArchiveFindings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ArchiveFindingsInput,
    ArchiveFindingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ArchiveFindingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<ArchiveFindingsInput, ArchiveFindingsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ArchiveFindingsInput, ArchiveFindingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
