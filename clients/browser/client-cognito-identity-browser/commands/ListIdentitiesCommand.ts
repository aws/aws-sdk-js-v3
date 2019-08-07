import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListIdentities } from "../model/ListIdentities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListIdentitiesInput } from "../types/ListIdentitiesInput";
import { ListIdentitiesOutput } from "../types/ListIdentitiesOutput";
import { CognitoIdentityResolvedConfiguration } from "../CognitoIdentityConfiguration";
export * from "../types/ListIdentitiesInput";
export * from "../types/ListIdentitiesOutput";
export * from "../types/ListIdentitiesExceptionsUnion";

export class ListIdentitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListIdentitiesInput,
      OutputTypesUnion,
      ListIdentitiesOutput,
      CognitoIdentityResolvedConfiguration,
      Blob
    > {
  readonly model = ListIdentities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListIdentitiesInput,
    ListIdentitiesOutput,
    Blob
  >();

  constructor(readonly input: ListIdentitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityResolvedConfiguration
  ): __aws_sdk_types.Handler<ListIdentitiesInput, ListIdentitiesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListIdentitiesInput, ListIdentitiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
