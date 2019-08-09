import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateIPSet } from "../model/CreateIPSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateIPSetInput } from "../types/CreateIPSetInput";
import { CreateIPSetOutput } from "../types/CreateIPSetOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/CreateIPSetInput";
export * from "../types/CreateIPSetOutput";
export * from "../types/CreateIPSetExceptionsUnion";

export class CreateIPSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateIPSetInput,
      OutputTypesUnion,
      CreateIPSetOutput,
      GuardDutyResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateIPSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateIPSetInput,
    CreateIPSetOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateIPSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateIPSetInput, CreateIPSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateIPSetInput, CreateIPSetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
