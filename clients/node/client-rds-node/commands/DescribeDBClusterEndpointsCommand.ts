import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDBClusterEndpoints } from "../model/operations/DescribeDBClusterEndpoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBClusterEndpointsInput } from "../types/DescribeDBClusterEndpointsInput";
import { DescribeDBClusterEndpointsOutput } from "../types/DescribeDBClusterEndpointsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeDBClusterEndpointsInput";
export * from "../types/DescribeDBClusterEndpointsOutput";
export * from "../types/DescribeDBClusterEndpointsExceptionsUnion";

export class DescribeDBClusterEndpointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBClusterEndpointsInput,
      OutputTypesUnion,
      DescribeDBClusterEndpointsOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDBClusterEndpoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBClusterEndpointsInput,
    DescribeDBClusterEndpointsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDBClusterEndpointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBClusterEndpointsInput,
    DescribeDBClusterEndpointsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDBClusterEndpointsInput,
        DescribeDBClusterEndpointsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
