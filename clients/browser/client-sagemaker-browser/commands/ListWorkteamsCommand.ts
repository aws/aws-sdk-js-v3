import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListWorkteams } from "../model/operations/ListWorkteams";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListWorkteamsInput } from "../types/ListWorkteamsInput";
import { ListWorkteamsOutput } from "../types/ListWorkteamsOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListWorkteamsInput";
export * from "../types/ListWorkteamsOutput";
export * from "../types/ListWorkteamsExceptionsUnion";

export class ListWorkteamsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListWorkteamsInput,
      OutputTypesUnion,
      ListWorkteamsOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = ListWorkteams;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListWorkteamsInput,
    ListWorkteamsOutput,
    Blob
  >();

  constructor(readonly input: ListWorkteamsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<ListWorkteamsInput, ListWorkteamsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListWorkteamsInput, ListWorkteamsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
