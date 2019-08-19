import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SearchUsers } from "../model/operations/SearchUsers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchUsersInput } from "../types/SearchUsersInput";
import { SearchUsersOutput } from "../types/SearchUsersOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/SearchUsersInput";
export * from "../types/SearchUsersOutput";
export * from "../types/SearchUsersExceptionsUnion";

export class SearchUsersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchUsersInput,
      OutputTypesUnion,
      SearchUsersOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SearchUsers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchUsersInput,
    SearchUsersOutput,
    _stream.Readable
  >();

  constructor(readonly input: SearchUsersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<SearchUsersInput, SearchUsersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchUsersInput, SearchUsersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
