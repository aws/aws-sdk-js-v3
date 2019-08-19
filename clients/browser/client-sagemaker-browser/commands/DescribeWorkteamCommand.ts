import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeWorkteam } from "../model/operations/DescribeWorkteam";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeWorkteamInput } from "../types/DescribeWorkteamInput";
import { DescribeWorkteamOutput } from "../types/DescribeWorkteamOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DescribeWorkteamInput";
export * from "../types/DescribeWorkteamOutput";
export * from "../types/DescribeWorkteamExceptionsUnion";

export class DescribeWorkteamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeWorkteamInput,
      OutputTypesUnion,
      DescribeWorkteamOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeWorkteam;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeWorkteamInput,
    DescribeWorkteamOutput,
    Blob
  >();

  constructor(readonly input: DescribeWorkteamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeWorkteamInput, DescribeWorkteamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeWorkteamInput, DescribeWorkteamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
