import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSubscribedWorkteam } from "../model/operations/DescribeSubscribedWorkteam";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSubscribedWorkteamInput } from "../types/DescribeSubscribedWorkteamInput";
import { DescribeSubscribedWorkteamOutput } from "../types/DescribeSubscribedWorkteamOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DescribeSubscribedWorkteamInput";
export * from "../types/DescribeSubscribedWorkteamOutput";
export * from "../types/DescribeSubscribedWorkteamExceptionsUnion";

export class DescribeSubscribedWorkteamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSubscribedWorkteamInput,
      OutputTypesUnion,
      DescribeSubscribedWorkteamOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSubscribedWorkteam;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSubscribedWorkteamInput,
    DescribeSubscribedWorkteamOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSubscribedWorkteamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSubscribedWorkteamInput,
    DescribeSubscribedWorkteamOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeSubscribedWorkteamInput,
        DescribeSubscribedWorkteamOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
