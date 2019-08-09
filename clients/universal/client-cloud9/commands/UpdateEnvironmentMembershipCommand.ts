import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateEnvironmentMembership } from "../model/UpdateEnvironmentMembership";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateEnvironmentMembershipInput } from "../types/UpdateEnvironmentMembershipInput";
import { UpdateEnvironmentMembershipOutput } from "../types/UpdateEnvironmentMembershipOutput";
import { Cloud9ResolvedConfiguration } from "../Cloud9Configuration";
export * from "../types/UpdateEnvironmentMembershipInput";
export * from "../types/UpdateEnvironmentMembershipOutput";
export * from "../types/UpdateEnvironmentMembershipExceptionsUnion";

export class UpdateEnvironmentMembershipCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateEnvironmentMembershipInput,
      OutputTypesUnion,
      UpdateEnvironmentMembershipOutput,
      Cloud9ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateEnvironmentMembership;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateEnvironmentMembershipInput,
    UpdateEnvironmentMembershipOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateEnvironmentMembershipInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Cloud9ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateEnvironmentMembershipInput,
    UpdateEnvironmentMembershipOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateEnvironmentMembershipInput,
        UpdateEnvironmentMembershipOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
