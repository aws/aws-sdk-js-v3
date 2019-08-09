import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateClassifier } from "../model/UpdateClassifier";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateClassifierInput } from "../types/UpdateClassifierInput";
import { UpdateClassifierOutput } from "../types/UpdateClassifierOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/UpdateClassifierInput";
export * from "../types/UpdateClassifierOutput";
export * from "../types/UpdateClassifierExceptionsUnion";

export class UpdateClassifierCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateClassifierInput,
      OutputTypesUnion,
      UpdateClassifierOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateClassifier;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateClassifierInput,
    UpdateClassifierOutput,
    Blob
  >();

  constructor(readonly input: UpdateClassifierInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateClassifierInput, UpdateClassifierOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateClassifierInput, UpdateClassifierOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
