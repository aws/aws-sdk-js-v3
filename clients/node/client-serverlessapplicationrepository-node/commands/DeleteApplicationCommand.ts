import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteApplication } from "../model/DeleteApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApplicationInput } from "../types/DeleteApplicationInput";
import { DeleteApplicationOutput } from "../types/DeleteApplicationOutput";
import { ServerlessApplicationRepositoryResolvedConfiguration } from "../ServerlessApplicationRepositoryConfiguration";
export * from "../types/DeleteApplicationInput";
export * from "../types/DeleteApplicationOutput";
export * from "../types/DeleteApplicationExceptionsUnion";

export class DeleteApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApplicationInput,
      OutputTypesUnion,
      DeleteApplicationOutput,
      ServerlessApplicationRepositoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApplicationInput,
    DeleteApplicationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServerlessApplicationRepositoryResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteApplicationInput, DeleteApplicationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteApplicationInput, DeleteApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
