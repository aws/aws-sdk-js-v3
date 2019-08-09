import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateObject } from "../model/CreateObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateObjectInput } from "../types/CreateObjectInput";
import { CreateObjectOutput } from "../types/CreateObjectOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/CreateObjectInput";
export * from "../types/CreateObjectOutput";
export * from "../types/CreateObjectExceptionsUnion";

export class CreateObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateObjectInput,
      OutputTypesUnion,
      CreateObjectOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateObjectInput,
    CreateObjectOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateObjectInput, CreateObjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateObjectInput, CreateObjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
