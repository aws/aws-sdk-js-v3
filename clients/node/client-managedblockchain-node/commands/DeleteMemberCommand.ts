import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteMember } from "../model/DeleteMember";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMemberInput } from "../types/DeleteMemberInput";
import { DeleteMemberOutput } from "../types/DeleteMemberOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/DeleteMemberInput";
export * from "../types/DeleteMemberOutput";
export * from "../types/DeleteMemberExceptionsUnion";

export class DeleteMemberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMemberInput,
      OutputTypesUnion,
      DeleteMemberOutput,
      ManagedBlockchainResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteMember;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMemberInput,
    DeleteMemberOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteMemberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteMemberInput, DeleteMemberOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteMemberInput, DeleteMemberOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
