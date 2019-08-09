import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateContainer } from "../model/CreateContainer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateContainerInput } from "../types/CreateContainerInput";
import { CreateContainerOutput } from "../types/CreateContainerOutput";
import { MediaStoreResolvedConfiguration } from "../MediaStoreConfiguration";
export * from "../types/CreateContainerInput";
export * from "../types/CreateContainerOutput";
export * from "../types/CreateContainerExceptionsUnion";

export class CreateContainerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateContainerInput,
      OutputTypesUnion,
      CreateContainerOutput,
      MediaStoreResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateContainer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateContainerInput,
    CreateContainerOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateContainerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaStoreResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateContainerInput, CreateContainerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateContainerInput, CreateContainerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
