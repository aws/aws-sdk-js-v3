import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListIdentityPools } from "../model/operations/ListIdentityPools";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListIdentityPoolsInput } from "../types/ListIdentityPoolsInput";
import { ListIdentityPoolsOutput } from "../types/ListIdentityPoolsOutput";
import { CognitoIdentityResolvedConfiguration } from "../CognitoIdentityConfiguration";
export * from "../types/ListIdentityPoolsInput";
export * from "../types/ListIdentityPoolsOutput";
export * from "../types/ListIdentityPoolsExceptionsUnion";

export class ListIdentityPoolsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListIdentityPoolsInput,
      OutputTypesUnion,
      ListIdentityPoolsOutput,
      CognitoIdentityResolvedConfiguration,
      Blob
    > {
  readonly model = ListIdentityPools;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListIdentityPoolsInput,
    ListIdentityPoolsOutput,
    Blob
  >();

  constructor(readonly input: ListIdentityPoolsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityResolvedConfiguration
  ): __aws_sdk_types.Handler<ListIdentityPoolsInput, ListIdentityPoolsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListIdentityPoolsInput, ListIdentityPoolsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
