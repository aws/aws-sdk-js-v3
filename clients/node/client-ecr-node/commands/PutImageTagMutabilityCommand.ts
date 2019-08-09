import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutImageTagMutability } from "../model/PutImageTagMutability";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutImageTagMutabilityInput } from "../types/PutImageTagMutabilityInput";
import { PutImageTagMutabilityOutput } from "../types/PutImageTagMutabilityOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/PutImageTagMutabilityInput";
export * from "../types/PutImageTagMutabilityOutput";
export * from "../types/PutImageTagMutabilityExceptionsUnion";

export class PutImageTagMutabilityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutImageTagMutabilityInput,
      OutputTypesUnion,
      PutImageTagMutabilityOutput,
      ECRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutImageTagMutability;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutImageTagMutabilityInput,
    PutImageTagMutabilityOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutImageTagMutabilityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutImageTagMutabilityInput,
    PutImageTagMutabilityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutImageTagMutabilityInput, PutImageTagMutabilityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
