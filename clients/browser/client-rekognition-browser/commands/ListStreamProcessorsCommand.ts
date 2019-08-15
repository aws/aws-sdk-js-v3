import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListStreamProcessors } from "../model/operations/ListStreamProcessors";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListStreamProcessorsInput } from "../types/ListStreamProcessorsInput";
import { ListStreamProcessorsOutput } from "../types/ListStreamProcessorsOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/ListStreamProcessorsInput";
export * from "../types/ListStreamProcessorsOutput";
export * from "../types/ListStreamProcessorsExceptionsUnion";

export class ListStreamProcessorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListStreamProcessorsInput,
      OutputTypesUnion,
      ListStreamProcessorsOutput,
      RekognitionResolvedConfiguration,
      Blob
    > {
  readonly model = ListStreamProcessors;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStreamProcessorsInput,
    ListStreamProcessorsOutput,
    Blob
  >();

  constructor(readonly input: ListStreamProcessorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListStreamProcessorsInput,
    ListStreamProcessorsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListStreamProcessorsInput, ListStreamProcessorsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
