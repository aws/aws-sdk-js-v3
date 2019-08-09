import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ArchiveFindings } from "../model/ArchiveFindings";
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
      Blob
    > {
  readonly model = ArchiveFindings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ArchiveFindingsInput,
    ArchiveFindingsOutput,
    Blob
  >();

  constructor(readonly input: ArchiveFindingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
