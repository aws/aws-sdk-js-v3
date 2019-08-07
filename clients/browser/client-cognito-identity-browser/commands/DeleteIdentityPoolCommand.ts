import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteIdentityPool } from "../model/DeleteIdentityPool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteIdentityPoolInput } from "../types/DeleteIdentityPoolInput";
import { DeleteIdentityPoolOutput } from "../types/DeleteIdentityPoolOutput";
import { CognitoIdentityResolvedConfiguration } from "../CognitoIdentityConfiguration";
export * from "../types/DeleteIdentityPoolInput";
export * from "../types/DeleteIdentityPoolOutput";
export * from "../types/DeleteIdentityPoolExceptionsUnion";

export class DeleteIdentityPoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteIdentityPoolInput,
      OutputTypesUnion,
      DeleteIdentityPoolOutput,
      CognitoIdentityResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteIdentityPool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteIdentityPoolInput,
    DeleteIdentityPoolOutput,
    Blob
  >();

  constructor(readonly input: DeleteIdentityPoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteIdentityPoolInput,
    DeleteIdentityPoolOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteIdentityPoolInput, DeleteIdentityPoolOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
