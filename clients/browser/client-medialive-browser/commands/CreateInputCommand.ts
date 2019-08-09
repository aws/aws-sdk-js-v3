import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateInput } from "../model/CreateInput";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateInputInput } from "../types/CreateInputInput";
import { CreateInputOutput } from "../types/CreateInputOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/CreateInputInput";
export * from "../types/CreateInputOutput";
export * from "../types/CreateInputExceptionsUnion";

export class CreateInputCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateInputInput,
      OutputTypesUnion,
      CreateInputOutput,
      MediaLiveResolvedConfiguration,
      Blob
    > {
  readonly model = CreateInput;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateInputInput,
    CreateInputOutput,
    Blob
  >();

  constructor(readonly input: CreateInputInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateInputInput, CreateInputOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateInputInput, CreateInputOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
