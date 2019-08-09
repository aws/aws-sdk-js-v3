import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateApplicationVersion } from "../model/CreateApplicationVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateApplicationVersionInput } from "../types/CreateApplicationVersionInput";
import { CreateApplicationVersionOutput } from "../types/CreateApplicationVersionOutput";
import { ServerlessApplicationRepositoryResolvedConfiguration } from "../ServerlessApplicationRepositoryConfiguration";
export * from "../types/CreateApplicationVersionInput";
export * from "../types/CreateApplicationVersionOutput";
export * from "../types/CreateApplicationVersionExceptionsUnion";

export class CreateApplicationVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateApplicationVersionInput,
      OutputTypesUnion,
      CreateApplicationVersionOutput,
      ServerlessApplicationRepositoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateApplicationVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateApplicationVersionInput,
    CreateApplicationVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateApplicationVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServerlessApplicationRepositoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateApplicationVersionInput,
    CreateApplicationVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateApplicationVersionInput, CreateApplicationVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
