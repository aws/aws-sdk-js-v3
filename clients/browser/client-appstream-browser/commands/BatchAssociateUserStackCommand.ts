import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchAssociateUserStack } from "../model/BatchAssociateUserStack";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchAssociateUserStackInput } from "../types/BatchAssociateUserStackInput";
import { BatchAssociateUserStackOutput } from "../types/BatchAssociateUserStackOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/BatchAssociateUserStackInput";
export * from "../types/BatchAssociateUserStackOutput";
export * from "../types/BatchAssociateUserStackExceptionsUnion";

export class BatchAssociateUserStackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchAssociateUserStackInput,
      OutputTypesUnion,
      BatchAssociateUserStackOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = BatchAssociateUserStack;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchAssociateUserStackInput,
    BatchAssociateUserStackOutput,
    Blob
  >();

  constructor(readonly input: BatchAssociateUserStackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchAssociateUserStackInput,
    BatchAssociateUserStackOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchAssociateUserStackInput, BatchAssociateUserStackOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
