import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTrail } from "../model/DeleteTrail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTrailInput } from "../types/DeleteTrailInput";
import { DeleteTrailOutput } from "../types/DeleteTrailOutput";
import { CloudTrailResolvedConfiguration } from "../CloudTrailConfiguration";
export * from "../types/DeleteTrailInput";
export * from "../types/DeleteTrailOutput";
export * from "../types/DeleteTrailExceptionsUnion";

export class DeleteTrailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTrailInput,
      OutputTypesUnion,
      DeleteTrailOutput,
      CloudTrailResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteTrail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTrailInput,
    DeleteTrailOutput,
    Blob
  >();

  constructor(readonly input: DeleteTrailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudTrailResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTrailInput, DeleteTrailOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTrailInput, DeleteTrailOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
