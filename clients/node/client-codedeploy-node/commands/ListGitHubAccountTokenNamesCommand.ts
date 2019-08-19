import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListGitHubAccountTokenNames } from "../model/operations/ListGitHubAccountTokenNames";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGitHubAccountTokenNamesInput } from "../types/ListGitHubAccountTokenNamesInput";
import { ListGitHubAccountTokenNamesOutput } from "../types/ListGitHubAccountTokenNamesOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/ListGitHubAccountTokenNamesInput";
export * from "../types/ListGitHubAccountTokenNamesOutput";
export * from "../types/ListGitHubAccountTokenNamesExceptionsUnion";

export class ListGitHubAccountTokenNamesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGitHubAccountTokenNamesInput,
      OutputTypesUnion,
      ListGitHubAccountTokenNamesOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListGitHubAccountTokenNames;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGitHubAccountTokenNamesInput,
    ListGitHubAccountTokenNamesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListGitHubAccountTokenNamesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListGitHubAccountTokenNamesInput,
    ListGitHubAccountTokenNamesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListGitHubAccountTokenNamesInput,
        ListGitHubAccountTokenNamesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
