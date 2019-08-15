import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateThreatIntelSet } from "../model/operations/CreateThreatIntelSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateThreatIntelSetInput } from "../types/CreateThreatIntelSetInput";
import { CreateThreatIntelSetOutput } from "../types/CreateThreatIntelSetOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/CreateThreatIntelSetInput";
export * from "../types/CreateThreatIntelSetOutput";
export * from "../types/CreateThreatIntelSetExceptionsUnion";

export class CreateThreatIntelSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateThreatIntelSetInput,
      OutputTypesUnion,
      CreateThreatIntelSetOutput,
      GuardDutyResolvedConfiguration,
      Blob
    > {
  readonly model = CreateThreatIntelSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateThreatIntelSetInput,
    CreateThreatIntelSetOutput,
    Blob
  >();

  constructor(readonly input: CreateThreatIntelSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateThreatIntelSetInput,
    CreateThreatIntelSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateThreatIntelSetInput, CreateThreatIntelSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
