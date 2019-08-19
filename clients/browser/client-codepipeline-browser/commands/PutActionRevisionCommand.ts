import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutActionRevision } from "../model/operations/PutActionRevision";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutActionRevisionInput } from "../types/PutActionRevisionInput";
import { PutActionRevisionOutput } from "../types/PutActionRevisionOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/PutActionRevisionInput";
export * from "../types/PutActionRevisionOutput";
export * from "../types/PutActionRevisionExceptionsUnion";

export class PutActionRevisionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutActionRevisionInput,
      OutputTypesUnion,
      PutActionRevisionOutput,
      CodePipelineResolvedConfiguration,
      Blob
    > {
  readonly model = PutActionRevision;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutActionRevisionInput,
    PutActionRevisionOutput,
    Blob
  >();

  constructor(readonly input: PutActionRevisionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<PutActionRevisionInput, PutActionRevisionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutActionRevisionInput, PutActionRevisionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
