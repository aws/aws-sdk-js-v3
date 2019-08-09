import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAuthorizer } from "../model/DescribeAuthorizer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAuthorizerInput } from "../types/DescribeAuthorizerInput";
import { DescribeAuthorizerOutput } from "../types/DescribeAuthorizerOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeAuthorizerInput";
export * from "../types/DescribeAuthorizerOutput";
export * from "../types/DescribeAuthorizerExceptionsUnion";

export class DescribeAuthorizerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAuthorizerInput,
      OutputTypesUnion,
      DescribeAuthorizerOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAuthorizer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAuthorizerInput,
    DescribeAuthorizerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAuthorizerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAuthorizerInput,
    DescribeAuthorizerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAuthorizerInput, DescribeAuthorizerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
