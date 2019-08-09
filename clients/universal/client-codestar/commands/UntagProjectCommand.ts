import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UntagProject } from "../model/UntagProject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UntagProjectInput } from "../types/UntagProjectInput";
import { UntagProjectOutput } from "../types/UntagProjectOutput";
import { CodeStarResolvedConfiguration } from "../CodeStarConfiguration";
export * from "../types/UntagProjectInput";
export * from "../types/UntagProjectOutput";
export * from "../types/UntagProjectExceptionsUnion";

export class UntagProjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UntagProjectInput,
      OutputTypesUnion,
      UntagProjectOutput,
      CodeStarResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UntagProject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagProjectInput,
    UntagProjectOutput,
    Uint8Array
  >();

  constructor(readonly input: UntagProjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeStarResolvedConfiguration
  ): __aws_sdk_types.Handler<UntagProjectInput, UntagProjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UntagProjectInput, UntagProjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
