import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateQualificationType } from "../model/CreateQualificationType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateQualificationTypeInput } from "../types/CreateQualificationTypeInput";
import { CreateQualificationTypeOutput } from "../types/CreateQualificationTypeOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/CreateQualificationTypeInput";
export * from "../types/CreateQualificationTypeOutput";
export * from "../types/CreateQualificationTypeExceptionsUnion";

export class CreateQualificationTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateQualificationTypeInput,
      OutputTypesUnion,
      CreateQualificationTypeOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = CreateQualificationType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateQualificationTypeInput,
    CreateQualificationTypeOutput,
    Blob
  >();

  constructor(readonly input: CreateQualificationTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateQualificationTypeInput,
    CreateQualificationTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateQualificationTypeInput, CreateQualificationTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
