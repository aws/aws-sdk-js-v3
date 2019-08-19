import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteEnvironmentMembership } from "../model/operations/DeleteEnvironmentMembership";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEnvironmentMembershipInput } from "../types/DeleteEnvironmentMembershipInput";
import { DeleteEnvironmentMembershipOutput } from "../types/DeleteEnvironmentMembershipOutput";
import { Cloud9ResolvedConfiguration } from "../Cloud9Configuration";
export * from "../types/DeleteEnvironmentMembershipInput";
export * from "../types/DeleteEnvironmentMembershipOutput";
export * from "../types/DeleteEnvironmentMembershipExceptionsUnion";

export class DeleteEnvironmentMembershipCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEnvironmentMembershipInput,
      OutputTypesUnion,
      DeleteEnvironmentMembershipOutput,
      Cloud9ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteEnvironmentMembership;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEnvironmentMembershipInput,
    DeleteEnvironmentMembershipOutput,
    Blob
  >();

  constructor(readonly input: DeleteEnvironmentMembershipInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Cloud9ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteEnvironmentMembershipInput,
    DeleteEnvironmentMembershipOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteEnvironmentMembershipInput,
        DeleteEnvironmentMembershipOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
