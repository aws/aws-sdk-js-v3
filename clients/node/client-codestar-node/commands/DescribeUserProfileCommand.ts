import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeUserProfile } from "../model/operations/DescribeUserProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeUserProfileInput } from "../types/DescribeUserProfileInput";
import { DescribeUserProfileOutput } from "../types/DescribeUserProfileOutput";
import { CodeStarResolvedConfiguration } from "../CodeStarConfiguration";
export * from "../types/DescribeUserProfileInput";
export * from "../types/DescribeUserProfileOutput";
export * from "../types/DescribeUserProfileExceptionsUnion";

export class DescribeUserProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeUserProfileInput,
      OutputTypesUnion,
      DescribeUserProfileOutput,
      CodeStarResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeUserProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeUserProfileInput,
    DescribeUserProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeUserProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeStarResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeUserProfileInput,
    DescribeUserProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeUserProfileInput, DescribeUserProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
