import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TagProject } from "../model/TagProject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TagProjectInput } from "../types/TagProjectInput";
import { TagProjectOutput } from "../types/TagProjectOutput";
import { CodeStarResolvedConfiguration } from "../CodeStarConfiguration";
export * from "../types/TagProjectInput";
export * from "../types/TagProjectOutput";
export * from "../types/TagProjectExceptionsUnion";

export class TagProjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TagProjectInput,
      OutputTypesUnion,
      TagProjectOutput,
      CodeStarResolvedConfiguration,
      Uint8Array
    > {
  readonly model = TagProject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TagProjectInput,
    TagProjectOutput,
    Uint8Array
  >();

  constructor(readonly input: TagProjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeStarResolvedConfiguration
  ): __aws_sdk_types.Handler<TagProjectInput, TagProjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TagProjectInput, TagProjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
