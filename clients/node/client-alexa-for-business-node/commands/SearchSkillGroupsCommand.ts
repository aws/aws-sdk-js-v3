import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SearchSkillGroups } from "../model/SearchSkillGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchSkillGroupsInput } from "../types/SearchSkillGroupsInput";
import { SearchSkillGroupsOutput } from "../types/SearchSkillGroupsOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/SearchSkillGroupsInput";
export * from "../types/SearchSkillGroupsOutput";
export * from "../types/SearchSkillGroupsExceptionsUnion";

export class SearchSkillGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchSkillGroupsInput,
      OutputTypesUnion,
      SearchSkillGroupsOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SearchSkillGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchSkillGroupsInput,
    SearchSkillGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: SearchSkillGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<SearchSkillGroupsInput, SearchSkillGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchSkillGroupsInput, SearchSkillGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
