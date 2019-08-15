import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteHIT } from "../model/operations/DeleteHIT";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteHITInput } from "../types/DeleteHITInput";
import { DeleteHITOutput } from "../types/DeleteHITOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/DeleteHITInput";
export * from "../types/DeleteHITOutput";
export * from "../types/DeleteHITExceptionsUnion";

export class DeleteHITCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteHITInput,
      OutputTypesUnion,
      DeleteHITOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteHIT;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteHITInput,
    DeleteHITOutput,
    Blob
  >();

  constructor(readonly input: DeleteHITInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteHITInput, DeleteHITOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteHITInput, DeleteHITOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
