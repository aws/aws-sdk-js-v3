import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTags } from "../model/CreateTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTagsInput } from "../types/CreateTagsInput";
import { CreateTagsOutput } from "../types/CreateTagsOutput";
import { EFSResolvedConfiguration } from "../EFSConfiguration";
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
      EFSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTagsInput,
    CreateTagsOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EFSResolvedConfiguration
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
