import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTrafficMirrorTarget } from "../model/operations/DeleteTrafficMirrorTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTrafficMirrorTargetInput } from "../types/DeleteTrafficMirrorTargetInput";
import { DeleteTrafficMirrorTargetOutput } from "../types/DeleteTrafficMirrorTargetOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteTrafficMirrorTargetInput";
export * from "../types/DeleteTrafficMirrorTargetOutput";
export * from "../types/DeleteTrafficMirrorTargetExceptionsUnion";

export class DeleteTrafficMirrorTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTrafficMirrorTargetInput,
      OutputTypesUnion,
      DeleteTrafficMirrorTargetOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteTrafficMirrorTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTrafficMirrorTargetInput,
    DeleteTrafficMirrorTargetOutput,
    Blob
  >();

  constructor(readonly input: DeleteTrafficMirrorTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteTrafficMirrorTargetInput,
    DeleteTrafficMirrorTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTrafficMirrorTargetInput, DeleteTrafficMirrorTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
