import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteGroupMembership } from "../model/DeleteGroupMembership";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteGroupMembershipInput } from "../types/DeleteGroupMembershipInput";
import { DeleteGroupMembershipOutput } from "../types/DeleteGroupMembershipOutput";
import { QuickSightResolvedConfiguration } from "../QuickSightConfiguration";
export * from "../types/DeleteGroupMembershipInput";
export * from "../types/DeleteGroupMembershipOutput";
export * from "../types/DeleteGroupMembershipExceptionsUnion";

export class DeleteGroupMembershipCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteGroupMembershipInput,
      OutputTypesUnion,
      DeleteGroupMembershipOutput,
      QuickSightResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteGroupMembership;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteGroupMembershipInput,
    DeleteGroupMembershipOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteGroupMembershipInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: QuickSightResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteGroupMembershipInput,
    DeleteGroupMembershipOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteGroupMembershipInput, DeleteGroupMembershipOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
