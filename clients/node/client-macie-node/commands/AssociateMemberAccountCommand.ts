import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateMemberAccount } from "../model/operations/AssociateMemberAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateMemberAccountInput } from "../types/AssociateMemberAccountInput";
import { AssociateMemberAccountOutput } from "../types/AssociateMemberAccountOutput";
import { MacieResolvedConfiguration } from "../MacieConfiguration";
export * from "../types/AssociateMemberAccountInput";
export * from "../types/AssociateMemberAccountOutput";
export * from "../types/AssociateMemberAccountExceptionsUnion";

export class AssociateMemberAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateMemberAccountInput,
      OutputTypesUnion,
      AssociateMemberAccountOutput,
      MacieResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateMemberAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateMemberAccountInput,
    AssociateMemberAccountOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateMemberAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MacieResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateMemberAccountInput,
    AssociateMemberAccountOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateMemberAccountInput, AssociateMemberAccountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
