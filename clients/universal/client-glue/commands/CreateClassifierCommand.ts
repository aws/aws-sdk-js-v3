import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateClassifier } from "../model/CreateClassifier";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateClassifierInput } from "../types/CreateClassifierInput";
import { CreateClassifierOutput } from "../types/CreateClassifierOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/CreateClassifierInput";
export * from "../types/CreateClassifierOutput";
export * from "../types/CreateClassifierExceptionsUnion";

export class CreateClassifierCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateClassifierInput,
      OutputTypesUnion,
      CreateClassifierOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateClassifier;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateClassifierInput,
    CreateClassifierOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateClassifierInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateClassifierInput, CreateClassifierOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateClassifierInput, CreateClassifierOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
