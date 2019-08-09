import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteStackSet } from "../model/DeleteStackSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteStackSetInput } from "../types/DeleteStackSetInput";
import { DeleteStackSetOutput } from "../types/DeleteStackSetOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DeleteStackSetInput";
export * from "../types/DeleteStackSetOutput";
export * from "../types/DeleteStackSetExceptionsUnion";

export class DeleteStackSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteStackSetInput,
      OutputTypesUnion,
      DeleteStackSetOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteStackSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteStackSetInput,
    DeleteStackSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteStackSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteStackSetInput, DeleteStackSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteStackSetInput, DeleteStackSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
