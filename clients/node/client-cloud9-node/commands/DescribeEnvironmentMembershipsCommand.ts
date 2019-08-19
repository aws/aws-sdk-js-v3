import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEnvironmentMemberships } from "../model/operations/DescribeEnvironmentMemberships";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEnvironmentMembershipsInput } from "../types/DescribeEnvironmentMembershipsInput";
import { DescribeEnvironmentMembershipsOutput } from "../types/DescribeEnvironmentMembershipsOutput";
import { Cloud9ResolvedConfiguration } from "../Cloud9Configuration";
export * from "../types/DescribeEnvironmentMembershipsInput";
export * from "../types/DescribeEnvironmentMembershipsOutput";
export * from "../types/DescribeEnvironmentMembershipsExceptionsUnion";

export class DescribeEnvironmentMembershipsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEnvironmentMembershipsInput,
      OutputTypesUnion,
      DescribeEnvironmentMembershipsOutput,
      Cloud9ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEnvironmentMemberships;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEnvironmentMembershipsInput,
    DescribeEnvironmentMembershipsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEnvironmentMembershipsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Cloud9ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEnvironmentMembershipsInput,
    DescribeEnvironmentMembershipsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeEnvironmentMembershipsInput,
        DescribeEnvironmentMembershipsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
