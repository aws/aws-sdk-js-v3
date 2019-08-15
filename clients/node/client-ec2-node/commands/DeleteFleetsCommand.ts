import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteFleets } from "../model/operations/DeleteFleets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFleetsInput } from "../types/DeleteFleetsInput";
import { DeleteFleetsOutput } from "../types/DeleteFleetsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteFleetsInput";
export * from "../types/DeleteFleetsOutput";
export * from "../types/DeleteFleetsExceptionsUnion";

export class DeleteFleetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFleetsInput,
      OutputTypesUnion,
      DeleteFleetsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteFleets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFleetsInput,
    DeleteFleetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteFleetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteFleetsInput, DeleteFleetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFleetsInput, DeleteFleetsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
