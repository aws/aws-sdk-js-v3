import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UnlinkIdentity } from "../model/UnlinkIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UnlinkIdentityInput } from "../types/UnlinkIdentityInput";
import { UnlinkIdentityOutput } from "../types/UnlinkIdentityOutput";
import { CognitoIdentityResolvedConfiguration } from "../CognitoIdentityConfiguration";
export * from "../types/UnlinkIdentityInput";
export * from "../types/UnlinkIdentityOutput";
export * from "../types/UnlinkIdentityExceptionsUnion";

export class UnlinkIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UnlinkIdentityInput,
      OutputTypesUnion,
      UnlinkIdentityOutput,
      CognitoIdentityResolvedConfiguration,
      Blob
    > {
  readonly model = UnlinkIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UnlinkIdentityInput,
    UnlinkIdentityOutput,
    Blob
  >();

  constructor(readonly input: UnlinkIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityResolvedConfiguration
  ): __aws_sdk_types.Handler<UnlinkIdentityInput, UnlinkIdentityOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UnlinkIdentityInput, UnlinkIdentityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
