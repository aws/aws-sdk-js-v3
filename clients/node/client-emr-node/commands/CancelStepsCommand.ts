import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CancelSteps } from "../model/CancelSteps";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelStepsInput } from "../types/CancelStepsInput";
import { CancelStepsOutput } from "../types/CancelStepsOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/CancelStepsInput";
export * from "../types/CancelStepsOutput";
export * from "../types/CancelStepsExceptionsUnion";

export class CancelStepsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelStepsInput,
      OutputTypesUnion,
      CancelStepsOutput,
      EMRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CancelSteps;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelStepsInput,
    CancelStepsOutput,
    _stream.Readable
  >();

  constructor(readonly input: CancelStepsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelStepsInput, CancelStepsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelStepsInput, CancelStepsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
