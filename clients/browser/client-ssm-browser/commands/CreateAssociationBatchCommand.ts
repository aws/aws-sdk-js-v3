import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateAssociationBatch } from "../model/operations/CreateAssociationBatch";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAssociationBatchInput } from "../types/CreateAssociationBatchInput";
import { CreateAssociationBatchOutput } from "../types/CreateAssociationBatchOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/CreateAssociationBatchInput";
export * from "../types/CreateAssociationBatchOutput";
export * from "../types/CreateAssociationBatchExceptionsUnion";

export class CreateAssociationBatchCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAssociationBatchInput,
      OutputTypesUnion,
      CreateAssociationBatchOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = CreateAssociationBatch;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAssociationBatchInput,
    CreateAssociationBatchOutput,
    Blob
  >();

  constructor(readonly input: CreateAssociationBatchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateAssociationBatchInput,
    CreateAssociationBatchOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAssociationBatchInput, CreateAssociationBatchOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
