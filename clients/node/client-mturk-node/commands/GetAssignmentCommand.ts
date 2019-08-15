import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAssignment } from "../model/operations/GetAssignment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAssignmentInput } from "../types/GetAssignmentInput";
import { GetAssignmentOutput } from "../types/GetAssignmentOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/GetAssignmentInput";
export * from "../types/GetAssignmentOutput";
export * from "../types/GetAssignmentExceptionsUnion";

export class GetAssignmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAssignmentInput,
      OutputTypesUnion,
      GetAssignmentOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAssignment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAssignmentInput,
    GetAssignmentOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAssignmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAssignmentInput, GetAssignmentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAssignmentInput, GetAssignmentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
