import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTrafficMirrorSessions } from "../model/operations/DescribeTrafficMirrorSessions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTrafficMirrorSessionsInput } from "../types/DescribeTrafficMirrorSessionsInput";
import { DescribeTrafficMirrorSessionsOutput } from "../types/DescribeTrafficMirrorSessionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeTrafficMirrorSessionsInput";
export * from "../types/DescribeTrafficMirrorSessionsOutput";
export * from "../types/DescribeTrafficMirrorSessionsExceptionsUnion";

export class DescribeTrafficMirrorSessionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTrafficMirrorSessionsInput,
      OutputTypesUnion,
      DescribeTrafficMirrorSessionsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeTrafficMirrorSessions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTrafficMirrorSessionsInput,
    DescribeTrafficMirrorSessionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeTrafficMirrorSessionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTrafficMirrorSessionsInput,
    DescribeTrafficMirrorSessionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTrafficMirrorSessionsInput,
        DescribeTrafficMirrorSessionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
