import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteStack } from "../model/operations/DeleteStack";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteStackInput } from "../types/DeleteStackInput";
import { DeleteStackOutput } from "../types/DeleteStackOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DeleteStackInput";
export * from "../types/DeleteStackOutput";
export * from "../types/DeleteStackExceptionsUnion";

export class DeleteStackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteStackInput,
      OutputTypesUnion,
      DeleteStackOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteStack;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteStackInput,
    DeleteStackOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteStackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteStackInput, DeleteStackOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteStackInput, DeleteStackOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
