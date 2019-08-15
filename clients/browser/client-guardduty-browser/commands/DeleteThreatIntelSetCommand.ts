import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteThreatIntelSet } from "../model/operations/DeleteThreatIntelSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteThreatIntelSetInput } from "../types/DeleteThreatIntelSetInput";
import { DeleteThreatIntelSetOutput } from "../types/DeleteThreatIntelSetOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/DeleteThreatIntelSetInput";
export * from "../types/DeleteThreatIntelSetOutput";
export * from "../types/DeleteThreatIntelSetExceptionsUnion";

export class DeleteThreatIntelSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteThreatIntelSetInput,
      OutputTypesUnion,
      DeleteThreatIntelSetOutput,
      GuardDutyResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteThreatIntelSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteThreatIntelSetInput,
    DeleteThreatIntelSetOutput,
    Blob
  >();

  constructor(readonly input: DeleteThreatIntelSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteThreatIntelSetInput,
    DeleteThreatIntelSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteThreatIntelSetInput, DeleteThreatIntelSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
