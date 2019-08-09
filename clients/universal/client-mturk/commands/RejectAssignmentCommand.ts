import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RejectAssignment } from "../model/RejectAssignment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RejectAssignmentInput } from "../types/RejectAssignmentInput";
import { RejectAssignmentOutput } from "../types/RejectAssignmentOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/RejectAssignmentInput";
export * from "../types/RejectAssignmentOutput";
export * from "../types/RejectAssignmentExceptionsUnion";

export class RejectAssignmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RejectAssignmentInput,
      OutputTypesUnion,
      RejectAssignmentOutput,
      MTurkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RejectAssignment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RejectAssignmentInput,
    RejectAssignmentOutput,
    Uint8Array
  >();

  constructor(readonly input: RejectAssignmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<RejectAssignmentInput, RejectAssignmentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RejectAssignmentInput, RejectAssignmentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
