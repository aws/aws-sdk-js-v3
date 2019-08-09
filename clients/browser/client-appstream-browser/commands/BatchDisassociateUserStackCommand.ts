import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchDisassociateUserStack } from "../model/BatchDisassociateUserStack";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDisassociateUserStackInput } from "../types/BatchDisassociateUserStackInput";
import { BatchDisassociateUserStackOutput } from "../types/BatchDisassociateUserStackOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/BatchDisassociateUserStackInput";
export * from "../types/BatchDisassociateUserStackOutput";
export * from "../types/BatchDisassociateUserStackExceptionsUnion";

export class BatchDisassociateUserStackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDisassociateUserStackInput,
      OutputTypesUnion,
      BatchDisassociateUserStackOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = BatchDisassociateUserStack;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDisassociateUserStackInput,
    BatchDisassociateUserStackOutput,
    Blob
  >();

  constructor(readonly input: BatchDisassociateUserStackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDisassociateUserStackInput,
    BatchDisassociateUserStackOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchDisassociateUserStackInput,
        BatchDisassociateUserStackOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
