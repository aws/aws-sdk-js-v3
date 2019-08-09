import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDefaultAuthorizer } from "../model/DescribeDefaultAuthorizer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDefaultAuthorizerInput } from "../types/DescribeDefaultAuthorizerInput";
import { DescribeDefaultAuthorizerOutput } from "../types/DescribeDefaultAuthorizerOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeDefaultAuthorizerInput";
export * from "../types/DescribeDefaultAuthorizerOutput";
export * from "../types/DescribeDefaultAuthorizerExceptionsUnion";

export class DescribeDefaultAuthorizerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDefaultAuthorizerInput,
      OutputTypesUnion,
      DescribeDefaultAuthorizerOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDefaultAuthorizer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDefaultAuthorizerInput,
    DescribeDefaultAuthorizerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDefaultAuthorizerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDefaultAuthorizerInput,
    DescribeDefaultAuthorizerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDefaultAuthorizerInput, DescribeDefaultAuthorizerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
