import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { InvalidateProjectCache } from "../model/operations/InvalidateProjectCache";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { InvalidateProjectCacheInput } from "../types/InvalidateProjectCacheInput";
import { InvalidateProjectCacheOutput } from "../types/InvalidateProjectCacheOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/InvalidateProjectCacheInput";
export * from "../types/InvalidateProjectCacheOutput";
export * from "../types/InvalidateProjectCacheExceptionsUnion";

export class InvalidateProjectCacheCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      InvalidateProjectCacheInput,
      OutputTypesUnion,
      InvalidateProjectCacheOutput,
      CodeBuildResolvedConfiguration,
      Blob
    > {
  readonly model = InvalidateProjectCache;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InvalidateProjectCacheInput,
    InvalidateProjectCacheOutput,
    Blob
  >();

  constructor(readonly input: InvalidateProjectCacheInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<
    InvalidateProjectCacheInput,
    InvalidateProjectCacheOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<InvalidateProjectCacheInput, InvalidateProjectCacheOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
