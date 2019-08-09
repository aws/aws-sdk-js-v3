import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeBuild } from "../model/DescribeBuild";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBuildInput } from "../types/DescribeBuildInput";
import { DescribeBuildOutput } from "../types/DescribeBuildOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeBuildInput";
export * from "../types/DescribeBuildOutput";
export * from "../types/DescribeBuildExceptionsUnion";

export class DescribeBuildCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBuildInput,
      OutputTypesUnion,
      DescribeBuildOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeBuild;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBuildInput,
    DescribeBuildOutput,
    Blob
  >();

  constructor(readonly input: DescribeBuildInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeBuildInput, DescribeBuildOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeBuildInput, DescribeBuildOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
