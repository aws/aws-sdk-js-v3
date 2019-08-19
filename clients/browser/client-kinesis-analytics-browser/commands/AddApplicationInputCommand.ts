import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddApplicationInput } from "../model/operations/AddApplicationInput";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddApplicationInputInput } from "../types/AddApplicationInputInput";
import { AddApplicationInputOutput } from "../types/AddApplicationInputOutput";
import { KinesisAnalyticsResolvedConfiguration } from "../KinesisAnalyticsConfiguration";
export * from "../types/AddApplicationInputInput";
export * from "../types/AddApplicationInputOutput";
export * from "../types/AddApplicationInputExceptionsUnion";

export class AddApplicationInputCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddApplicationInputInput,
      OutputTypesUnion,
      AddApplicationInputOutput,
      KinesisAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = AddApplicationInput;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddApplicationInputInput,
    AddApplicationInputOutput,
    Blob
  >();

  constructor(readonly input: AddApplicationInputInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddApplicationInputInput,
    AddApplicationInputOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddApplicationInputInput, AddApplicationInputOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
