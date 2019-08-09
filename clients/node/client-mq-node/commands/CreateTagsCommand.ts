import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateTags } from "../model/CreateTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTagsInput } from "../types/CreateTagsInput";
import { CreateTagsOutput } from "../types/CreateTagsOutput";
import { mqResolvedConfiguration } from "../mqConfiguration";
export * from "../types/CreateTagsInput";
export * from "../types/CreateTagsOutput";
export * from "../types/CreateTagsExceptionsUnion";

export class CreateTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTagsInput,
      OutputTypesUnion,
      CreateTagsOutput,
      mqResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTagsInput,
    CreateTagsOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: mqResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTagsInput, CreateTagsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTagsInput, CreateTagsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
