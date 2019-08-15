import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateLocationS3 } from "../model/operations/CreateLocationS3";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLocationS3Input } from "../types/CreateLocationS3Input";
import { CreateLocationS3Output } from "../types/CreateLocationS3Output";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/CreateLocationS3Input";
export * from "../types/CreateLocationS3Output";
export * from "../types/CreateLocationS3ExceptionsUnion";

export class CreateLocationS3Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLocationS3Input,
      OutputTypesUnion,
      CreateLocationS3Output,
      DataSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateLocationS3;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLocationS3Input,
    CreateLocationS3Output,
    _stream.Readable
  >();

  constructor(readonly input: CreateLocationS3Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateLocationS3Input, CreateLocationS3Output> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLocationS3Input, CreateLocationS3Output>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
