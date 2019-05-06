import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ChangeMessageVisibility } from "../model/ChangeMessageVisibility";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ChangeMessageVisibilityInput } from "../types/ChangeMessageVisibilityInput";
import { ChangeMessageVisibilityOutput } from "../types/ChangeMessageVisibilityOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/ChangeMessageVisibilityInput";
export * from "../types/ChangeMessageVisibilityOutput";
export * from "../types/ChangeMessageVisibilityExceptionsUnion";

export class ChangeMessageVisibilityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ChangeMessageVisibilityInput,
      OutputTypesUnion,
      ChangeMessageVisibilityOutput,
      SQSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ChangeMessageVisibility;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ChangeMessageVisibilityInput,
    ChangeMessageVisibilityOutput,
    _stream.Readable
  >();

  constructor(readonly input: ChangeMessageVisibilityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ChangeMessageVisibilityInput,
    ChangeMessageVisibilityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ChangeMessageVisibilityInput, ChangeMessageVisibilityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
