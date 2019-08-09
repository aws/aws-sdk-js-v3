import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSubscribedWorkteams } from "../model/ListSubscribedWorkteams";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSubscribedWorkteamsInput } from "../types/ListSubscribedWorkteamsInput";
import { ListSubscribedWorkteamsOutput } from "../types/ListSubscribedWorkteamsOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListSubscribedWorkteamsInput";
export * from "../types/ListSubscribedWorkteamsOutput";
export * from "../types/ListSubscribedWorkteamsExceptionsUnion";

export class ListSubscribedWorkteamsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSubscribedWorkteamsInput,
      OutputTypesUnion,
      ListSubscribedWorkteamsOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = ListSubscribedWorkteams;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSubscribedWorkteamsInput,
    ListSubscribedWorkteamsOutput,
    Blob
  >();

  constructor(readonly input: ListSubscribedWorkteamsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSubscribedWorkteamsInput,
    ListSubscribedWorkteamsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSubscribedWorkteamsInput, ListSubscribedWorkteamsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
