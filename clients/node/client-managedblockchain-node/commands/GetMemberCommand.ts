import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetMember } from "../model/operations/GetMember";
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
      _stream.Readable
    > {
  readonly model = GetMember;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMemberInput,
    GetMemberOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetMemberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
