import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeMyUserProfile } from "../model/DescribeMyUserProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMyUserProfileInput } from "../types/DescribeMyUserProfileInput";
import { DescribeMyUserProfileOutput } from "../types/DescribeMyUserProfileOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeMyUserProfileInput";
export * from "../types/DescribeMyUserProfileOutput";
export * from "../types/DescribeMyUserProfileExceptionsUnion";

export class DescribeMyUserProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMyUserProfileInput,
      OutputTypesUnion,
      DescribeMyUserProfileOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeMyUserProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMyUserProfileInput,
    DescribeMyUserProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeMyUserProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMyUserProfileInput,
    DescribeMyUserProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeMyUserProfileInput, DescribeMyUserProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
