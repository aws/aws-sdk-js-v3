import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ApproveAssignment } from "../model/ApproveAssignment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ApproveAssignmentInput } from "../types/ApproveAssignmentInput";
import { ApproveAssignmentOutput } from "../types/ApproveAssignmentOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/ApproveAssignmentInput";
export * from "../types/ApproveAssignmentOutput";
export * from "../types/ApproveAssignmentExceptionsUnion";

export class ApproveAssignmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ApproveAssignmentInput,
      OutputTypesUnion,
      ApproveAssignmentOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ApproveAssignment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ApproveAssignmentInput,
    ApproveAssignmentOutput,
    _stream.Readable
  >();

  constructor(readonly input: ApproveAssignmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<ApproveAssignmentInput, ApproveAssignmentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ApproveAssignmentInput, ApproveAssignmentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
