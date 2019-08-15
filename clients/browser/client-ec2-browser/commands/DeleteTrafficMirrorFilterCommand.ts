import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTrafficMirrorFilter } from "../model/operations/DeleteTrafficMirrorFilter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTrafficMirrorFilterInput } from "../types/DeleteTrafficMirrorFilterInput";
import { DeleteTrafficMirrorFilterOutput } from "../types/DeleteTrafficMirrorFilterOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteTrafficMirrorFilterInput";
export * from "../types/DeleteTrafficMirrorFilterOutput";
export * from "../types/DeleteTrafficMirrorFilterExceptionsUnion";

export class DeleteTrafficMirrorFilterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTrafficMirrorFilterInput,
      OutputTypesUnion,
      DeleteTrafficMirrorFilterOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteTrafficMirrorFilter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTrafficMirrorFilterInput,
    DeleteTrafficMirrorFilterOutput,
    Blob
  >();

  constructor(readonly input: DeleteTrafficMirrorFilterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteTrafficMirrorFilterInput,
    DeleteTrafficMirrorFilterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTrafficMirrorFilterInput, DeleteTrafficMirrorFilterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
