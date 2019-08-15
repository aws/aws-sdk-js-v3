import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutImageTagMutability } from "../model/operations/PutImageTagMutability";
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
      Blob
    > {
  readonly model = PutImageTagMutability;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutImageTagMutabilityInput,
    PutImageTagMutabilityOutput,
    Blob
  >();

  constructor(readonly input: PutImageTagMutabilityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
