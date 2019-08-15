import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UnlinkDeveloperIdentity } from "../model/operations/UnlinkDeveloperIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UnlinkDeveloperIdentityInput } from "../types/UnlinkDeveloperIdentityInput";
import { UnlinkDeveloperIdentityOutput } from "../types/UnlinkDeveloperIdentityOutput";
import { CognitoIdentityResolvedConfiguration } from "../CognitoIdentityConfiguration";
export * from "../types/UnlinkDeveloperIdentityInput";
export * from "../types/UnlinkDeveloperIdentityOutput";
export * from "../types/UnlinkDeveloperIdentityExceptionsUnion";

export class UnlinkDeveloperIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UnlinkDeveloperIdentityInput,
      OutputTypesUnion,
      UnlinkDeveloperIdentityOutput,
      CognitoIdentityResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UnlinkDeveloperIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UnlinkDeveloperIdentityInput,
    UnlinkDeveloperIdentityOutput,
    _stream.Readable
  >();

  constructor(readonly input: UnlinkDeveloperIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UnlinkDeveloperIdentityInput,
    UnlinkDeveloperIdentityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UnlinkDeveloperIdentityInput, UnlinkDeveloperIdentityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
