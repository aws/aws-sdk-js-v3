import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteActionTarget } from "../model/operations/DeleteActionTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteActionTargetInput } from "../types/DeleteActionTargetInput";
import { DeleteActionTargetOutput } from "../types/DeleteActionTargetOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/DeleteActionTargetInput";
export * from "../types/DeleteActionTargetOutput";
export * from "../types/DeleteActionTargetExceptionsUnion";

export class DeleteActionTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteActionTargetInput,
      OutputTypesUnion,
      DeleteActionTargetOutput,
      SecurityHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteActionTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteActionTargetInput,
    DeleteActionTargetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteActionTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteActionTargetInput,
    DeleteActionTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteActionTargetInput, DeleteActionTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
