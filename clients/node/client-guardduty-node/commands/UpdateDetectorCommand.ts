import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDetector } from "../model/operations/UpdateDetector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDetectorInput } from "../types/UpdateDetectorInput";
import { UpdateDetectorOutput } from "../types/UpdateDetectorOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/UpdateDetectorInput";
export * from "../types/UpdateDetectorOutput";
export * from "../types/UpdateDetectorExceptionsUnion";

export class UpdateDetectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDetectorInput,
      OutputTypesUnion,
      UpdateDetectorOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDetector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDetectorInput,
    UpdateDetectorOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDetectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDetectorInput, UpdateDetectorOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDetectorInput, UpdateDetectorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
