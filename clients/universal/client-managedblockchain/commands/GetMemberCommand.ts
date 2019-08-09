import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMember } from "../model/GetMember";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMemberInput } from "../types/GetMemberInput";
import { GetMemberOutput } from "../types/GetMemberOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/GetMemberInput";
export * from "../types/GetMemberOutput";
export * from "../types/GetMemberExceptionsUnion";

export class GetMemberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMemberInput,
      OutputTypesUnion,
      GetMemberOutput,
      ManagedBlockchainResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetMember;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMemberInput,
    GetMemberOutput,
    Uint8Array
  >();

  constructor(readonly input: GetMemberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMemberInput, GetMemberOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMemberInput, GetMemberOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
