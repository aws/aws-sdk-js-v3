import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchDetectEntities } from "../model/operations/BatchDetectEntities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDetectEntitiesInput } from "../types/BatchDetectEntitiesInput";
import { BatchDetectEntitiesOutput } from "../types/BatchDetectEntitiesOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/BatchDetectEntitiesInput";
export * from "../types/BatchDetectEntitiesOutput";
export * from "../types/BatchDetectEntitiesExceptionsUnion";

export class BatchDetectEntitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDetectEntitiesInput,
      OutputTypesUnion,
      BatchDetectEntitiesOutput,
      ComprehendResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchDetectEntities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDetectEntitiesInput,
    BatchDetectEntitiesOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchDetectEntitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDetectEntitiesInput,
    BatchDetectEntitiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchDetectEntitiesInput, BatchDetectEntitiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
