import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSkillsStoreCategories } from "../model/operations/ListSkillsStoreCategories";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSkillsStoreCategoriesInput } from "../types/ListSkillsStoreCategoriesInput";
import { ListSkillsStoreCategoriesOutput } from "../types/ListSkillsStoreCategoriesOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/ListSkillsStoreCategoriesInput";
export * from "../types/ListSkillsStoreCategoriesOutput";
export * from "../types/ListSkillsStoreCategoriesExceptionsUnion";

export class ListSkillsStoreCategoriesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSkillsStoreCategoriesInput,
      OutputTypesUnion,
      ListSkillsStoreCategoriesOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSkillsStoreCategories;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSkillsStoreCategoriesInput,
    ListSkillsStoreCategoriesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSkillsStoreCategoriesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSkillsStoreCategoriesInput,
    ListSkillsStoreCategoriesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSkillsStoreCategoriesInput, ListSkillsStoreCategoriesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
