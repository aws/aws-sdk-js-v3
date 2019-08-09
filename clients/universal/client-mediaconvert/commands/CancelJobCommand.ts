import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelJob } from "../model/CancelJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelJobInput } from "../types/CancelJobInput";
import { CancelJobOutput } from "../types/CancelJobOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
export * from "../types/CancelJobInput";
export * from "../types/CancelJobOutput";
export * from "../types/CancelJobExceptionsUnion";

export class CancelJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelJobInput,
      OutputTypesUnion,
      CancelJobOutput,
      MediaConvertResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CancelJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelJobInput,
    CancelJobOutput,
    Uint8Array
  >();

  constructor(readonly input: CancelJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaConvertResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelJobInput, CancelJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelJobInput, CancelJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
