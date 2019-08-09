import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListUserProfiles } from "../model/ListUserProfiles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListUserProfilesInput } from "../types/ListUserProfilesInput";
import { ListUserProfilesOutput } from "../types/ListUserProfilesOutput";
import { CodeStarResolvedConfiguration } from "../CodeStarConfiguration";
export * from "../types/ListUserProfilesInput";
export * from "../types/ListUserProfilesOutput";
export * from "../types/ListUserProfilesExceptionsUnion";

export class ListUserProfilesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListUserProfilesInput,
      OutputTypesUnion,
      ListUserProfilesOutput,
      CodeStarResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListUserProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListUserProfilesInput,
    ListUserProfilesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListUserProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeStarResolvedConfiguration
  ): __aws_sdk_types.Handler<ListUserProfilesInput, ListUserProfilesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListUserProfilesInput, ListUserProfilesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
