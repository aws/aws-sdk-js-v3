import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutApprovalResult } from "../model/operations/PutApprovalResult";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutApprovalResultInput } from "../types/PutApprovalResultInput";
import { PutApprovalResultOutput } from "../types/PutApprovalResultOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/PutApprovalResultInput";
export * from "../types/PutApprovalResultOutput";
export * from "../types/PutApprovalResultExceptionsUnion";

export class PutApprovalResultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutApprovalResultInput,
      OutputTypesUnion,
      PutApprovalResultOutput,
      CodePipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutApprovalResult;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutApprovalResultInput,
    PutApprovalResultOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutApprovalResultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<PutApprovalResultInput, PutApprovalResultOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutApprovalResultInput, PutApprovalResultOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
