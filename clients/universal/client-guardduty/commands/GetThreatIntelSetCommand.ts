import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetThreatIntelSet } from "../model/GetThreatIntelSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetThreatIntelSetInput } from "../types/GetThreatIntelSetInput";
import { GetThreatIntelSetOutput } from "../types/GetThreatIntelSetOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/GetThreatIntelSetInput";
export * from "../types/GetThreatIntelSetOutput";
export * from "../types/GetThreatIntelSetExceptionsUnion";

export class GetThreatIntelSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetThreatIntelSetInput,
      OutputTypesUnion,
      GetThreatIntelSetOutput,
      GuardDutyResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetThreatIntelSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetThreatIntelSetInput,
    GetThreatIntelSetOutput,
    Uint8Array
  >();

  constructor(readonly input: GetThreatIntelSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<GetThreatIntelSetInput, GetThreatIntelSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetThreatIntelSetInput, GetThreatIntelSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
