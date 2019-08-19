import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSkillsStoreSkillsByCategory } from "../model/operations/ListSkillsStoreSkillsByCategory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSkillsStoreSkillsByCategoryInput } from "../types/ListSkillsStoreSkillsByCategoryInput";
import { ListSkillsStoreSkillsByCategoryOutput } from "../types/ListSkillsStoreSkillsByCategoryOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/ListSkillsStoreSkillsByCategoryInput";
export * from "../types/ListSkillsStoreSkillsByCategoryOutput";
export * from "../types/ListSkillsStoreSkillsByCategoryExceptionsUnion";

export class ListSkillsStoreSkillsByCategoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSkillsStoreSkillsByCategoryInput,
      OutputTypesUnion,
      ListSkillsStoreSkillsByCategoryOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = ListSkillsStoreSkillsByCategory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSkillsStoreSkillsByCategoryInput,
    ListSkillsStoreSkillsByCategoryOutput,
    Blob
  >();

  constructor(readonly input: ListSkillsStoreSkillsByCategoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSkillsStoreSkillsByCategoryInput,
    ListSkillsStoreSkillsByCategoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListSkillsStoreSkillsByCategoryInput,
        ListSkillsStoreSkillsByCategoryOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
