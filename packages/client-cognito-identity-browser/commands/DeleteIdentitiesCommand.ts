import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteIdentities } from "../model/DeleteIdentities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteIdentitiesInput } from "../types/DeleteIdentitiesInput";
import { DeleteIdentitiesOutput } from "../types/DeleteIdentitiesOutput";
import { CognitoIdentityResolvedConfiguration } from "../CognitoIdentityConfiguration";
export * from "../types/DeleteIdentitiesInput";
export * from "../types/DeleteIdentitiesOutput";
export * from "../types/DeleteIdentitiesExceptionsUnion";

export class DeleteIdentitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteIdentitiesInput,
      OutputTypesUnion,
      DeleteIdentitiesOutput,
      CognitoIdentityResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteIdentities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteIdentitiesInput,
    DeleteIdentitiesOutput,
    Blob
  >();

  constructor(readonly input: DeleteIdentitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteIdentitiesInput, DeleteIdentitiesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteIdentitiesInput, DeleteIdentitiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
