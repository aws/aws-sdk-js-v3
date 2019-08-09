import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteParameters } from "../model/DeleteParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteParametersInput } from "../types/DeleteParametersInput";
import { DeleteParametersOutput } from "../types/DeleteParametersOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DeleteParametersInput";
export * from "../types/DeleteParametersOutput";
export * from "../types/DeleteParametersExceptionsUnion";

export class DeleteParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteParametersInput,
      OutputTypesUnion,
      DeleteParametersOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteParametersInput,
    DeleteParametersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteParametersInput, DeleteParametersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteParametersInput, DeleteParametersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
