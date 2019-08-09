import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateAlgorithm } from "../model/CreateAlgorithm";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAlgorithmInput } from "../types/CreateAlgorithmInput";
import { CreateAlgorithmOutput } from "../types/CreateAlgorithmOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/CreateAlgorithmInput";
export * from "../types/CreateAlgorithmOutput";
export * from "../types/CreateAlgorithmExceptionsUnion";

export class CreateAlgorithmCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAlgorithmInput,
      OutputTypesUnion,
      CreateAlgorithmOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateAlgorithm;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAlgorithmInput,
    CreateAlgorithmOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateAlgorithmInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateAlgorithmInput, CreateAlgorithmOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAlgorithmInput, CreateAlgorithmOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
