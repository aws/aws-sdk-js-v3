import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutRecord } from "../model/PutRecord";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutRecordInput } from "../types/PutRecordInput";
import { PutRecordOutput } from "../types/PutRecordOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/PutRecordInput";
export * from "../types/PutRecordOutput";
export * from "../types/PutRecordExceptionsUnion";

export class PutRecordCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutRecordInput,
      OutputTypesUnion,
      PutRecordOutput,
      KinesisResolvedConfiguration,
      Blob
    > {
  readonly model = PutRecord;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutRecordInput,
    PutRecordOutput,
    Blob
  >();

  constructor(readonly input: PutRecordInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<PutRecordInput, PutRecordOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutRecordInput, PutRecordOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
