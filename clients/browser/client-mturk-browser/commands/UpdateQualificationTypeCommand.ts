import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateQualificationType } from "../model/UpdateQualificationType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateQualificationTypeInput } from "../types/UpdateQualificationTypeInput";
import { UpdateQualificationTypeOutput } from "../types/UpdateQualificationTypeOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/UpdateQualificationTypeInput";
export * from "../types/UpdateQualificationTypeOutput";
export * from "../types/UpdateQualificationTypeExceptionsUnion";

export class UpdateQualificationTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateQualificationTypeInput,
      OutputTypesUnion,
      UpdateQualificationTypeOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateQualificationType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateQualificationTypeInput,
    UpdateQualificationTypeOutput,
    Blob
  >();

  constructor(readonly input: UpdateQualificationTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateQualificationTypeInput,
    UpdateQualificationTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateQualificationTypeInput, UpdateQualificationTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
