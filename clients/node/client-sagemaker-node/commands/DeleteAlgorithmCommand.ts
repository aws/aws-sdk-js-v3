import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteAlgorithm } from "../model/operations/DeleteAlgorithm";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAlgorithmInput } from "../types/DeleteAlgorithmInput";
import { DeleteAlgorithmOutput } from "../types/DeleteAlgorithmOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DeleteAlgorithmInput";
export * from "../types/DeleteAlgorithmOutput";
export * from "../types/DeleteAlgorithmExceptionsUnion";

export class DeleteAlgorithmCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAlgorithmInput,
      OutputTypesUnion,
      DeleteAlgorithmOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteAlgorithm;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAlgorithmInput,
    DeleteAlgorithmOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteAlgorithmInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAlgorithmInput, DeleteAlgorithmOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAlgorithmInput, DeleteAlgorithmOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
