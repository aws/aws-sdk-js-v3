import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssumeRoleWithWebIdentity } from "../model/operations/AssumeRoleWithWebIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssumeRoleWithWebIdentityInput } from "../types/AssumeRoleWithWebIdentityInput";
import { AssumeRoleWithWebIdentityOutput } from "../types/AssumeRoleWithWebIdentityOutput";
import { STSResolvedConfiguration } from "../STSConfiguration";
export * from "../types/AssumeRoleWithWebIdentityInput";
export * from "../types/AssumeRoleWithWebIdentityOutput";
export * from "../types/AssumeRoleWithWebIdentityExceptionsUnion";

export class AssumeRoleWithWebIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssumeRoleWithWebIdentityInput,
      OutputTypesUnion,
      AssumeRoleWithWebIdentityOutput,
      STSResolvedConfiguration,
      Blob
    > {
  readonly model = AssumeRoleWithWebIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssumeRoleWithWebIdentityInput,
    AssumeRoleWithWebIdentityOutput,
    Blob
  >();

  constructor(readonly input: AssumeRoleWithWebIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: STSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssumeRoleWithWebIdentityInput,
    AssumeRoleWithWebIdentityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssumeRoleWithWebIdentityInput, AssumeRoleWithWebIdentityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
