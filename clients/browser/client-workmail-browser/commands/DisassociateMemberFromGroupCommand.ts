import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateMemberFromGroup } from "../model/DisassociateMemberFromGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateMemberFromGroupInput } from "../types/DisassociateMemberFromGroupInput";
import { DisassociateMemberFromGroupOutput } from "../types/DisassociateMemberFromGroupOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/DisassociateMemberFromGroupInput";
export * from "../types/DisassociateMemberFromGroupOutput";
export * from "../types/DisassociateMemberFromGroupExceptionsUnion";

export class DisassociateMemberFromGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateMemberFromGroupInput,
      OutputTypesUnion,
      DisassociateMemberFromGroupOutput,
      WorkMailResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateMemberFromGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateMemberFromGroupInput,
    DisassociateMemberFromGroupOutput,
    Blob
  >();

  constructor(readonly input: DisassociateMemberFromGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateMemberFromGroupInput,
    DisassociateMemberFromGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateMemberFromGroupInput,
        DisassociateMemberFromGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
