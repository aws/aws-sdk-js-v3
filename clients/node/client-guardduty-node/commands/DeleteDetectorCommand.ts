import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDetector } from "../model/operations/DeleteDetector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDetectorInput } from "../types/DeleteDetectorInput";
import { DeleteDetectorOutput } from "../types/DeleteDetectorOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/DeleteDetectorInput";
export * from "../types/DeleteDetectorOutput";
export * from "../types/DeleteDetectorExceptionsUnion";

export class DeleteDetectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDetectorInput,
      OutputTypesUnion,
      DeleteDetectorOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDetector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDetectorInput,
    DeleteDetectorOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDetectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDetectorInput, DeleteDetectorOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDetectorInput, DeleteDetectorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
