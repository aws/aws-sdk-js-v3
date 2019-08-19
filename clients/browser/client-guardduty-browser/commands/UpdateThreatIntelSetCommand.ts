import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateThreatIntelSet } from "../model/operations/UpdateThreatIntelSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateThreatIntelSetInput } from "../types/UpdateThreatIntelSetInput";
import { UpdateThreatIntelSetOutput } from "../types/UpdateThreatIntelSetOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/UpdateThreatIntelSetInput";
export * from "../types/UpdateThreatIntelSetOutput";
export * from "../types/UpdateThreatIntelSetExceptionsUnion";

export class UpdateThreatIntelSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateThreatIntelSetInput,
      OutputTypesUnion,
      UpdateThreatIntelSetOutput,
      GuardDutyResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateThreatIntelSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateThreatIntelSetInput,
    UpdateThreatIntelSetOutput,
    Blob
  >();

  constructor(readonly input: UpdateThreatIntelSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateThreatIntelSetInput,
    UpdateThreatIntelSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateThreatIntelSetInput, UpdateThreatIntelSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
