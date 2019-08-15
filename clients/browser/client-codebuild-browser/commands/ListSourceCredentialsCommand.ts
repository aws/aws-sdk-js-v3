import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSourceCredentials } from "../model/operations/ListSourceCredentials";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSourceCredentialsInput } from "../types/ListSourceCredentialsInput";
import { ListSourceCredentialsOutput } from "../types/ListSourceCredentialsOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/ListSourceCredentialsInput";
export * from "../types/ListSourceCredentialsOutput";
export * from "../types/ListSourceCredentialsExceptionsUnion";

export class ListSourceCredentialsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSourceCredentialsInput,
      OutputTypesUnion,
      ListSourceCredentialsOutput,
      CodeBuildResolvedConfiguration,
      Blob
    > {
  readonly model = ListSourceCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSourceCredentialsInput,
    ListSourceCredentialsOutput,
    Blob
  >();

  constructor(readonly input: ListSourceCredentialsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSourceCredentialsInput,
    ListSourceCredentialsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSourceCredentialsInput, ListSourceCredentialsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
