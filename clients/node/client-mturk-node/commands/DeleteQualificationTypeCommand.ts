import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteQualificationType } from "../model/operations/DeleteQualificationType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteQualificationTypeInput } from "../types/DeleteQualificationTypeInput";
import { DeleteQualificationTypeOutput } from "../types/DeleteQualificationTypeOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/DeleteQualificationTypeInput";
export * from "../types/DeleteQualificationTypeOutput";
export * from "../types/DeleteQualificationTypeExceptionsUnion";

export class DeleteQualificationTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteQualificationTypeInput,
      OutputTypesUnion,
      DeleteQualificationTypeOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteQualificationType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteQualificationTypeInput,
    DeleteQualificationTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteQualificationTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteQualificationTypeInput,
    DeleteQualificationTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteQualificationTypeInput, DeleteQualificationTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
