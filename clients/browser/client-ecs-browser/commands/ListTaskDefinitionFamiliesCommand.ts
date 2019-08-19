import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTaskDefinitionFamilies } from "../model/operations/ListTaskDefinitionFamilies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTaskDefinitionFamiliesInput } from "../types/ListTaskDefinitionFamiliesInput";
import { ListTaskDefinitionFamiliesOutput } from "../types/ListTaskDefinitionFamiliesOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/ListTaskDefinitionFamiliesInput";
export * from "../types/ListTaskDefinitionFamiliesOutput";
export * from "../types/ListTaskDefinitionFamiliesExceptionsUnion";

export class ListTaskDefinitionFamiliesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTaskDefinitionFamiliesInput,
      OutputTypesUnion,
      ListTaskDefinitionFamiliesOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = ListTaskDefinitionFamilies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTaskDefinitionFamiliesInput,
    ListTaskDefinitionFamiliesOutput,
    Blob
  >();

  constructor(readonly input: ListTaskDefinitionFamiliesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTaskDefinitionFamiliesInput,
    ListTaskDefinitionFamiliesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListTaskDefinitionFamiliesInput,
        ListTaskDefinitionFamiliesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
