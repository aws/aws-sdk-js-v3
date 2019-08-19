import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeClientVpnRoutes } from "../model/operations/DescribeClientVpnRoutes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClientVpnRoutesInput } from "../types/DescribeClientVpnRoutesInput";
import { DescribeClientVpnRoutesOutput } from "../types/DescribeClientVpnRoutesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeClientVpnRoutesInput";
export * from "../types/DescribeClientVpnRoutesOutput";
export * from "../types/DescribeClientVpnRoutesExceptionsUnion";

export class DescribeClientVpnRoutesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClientVpnRoutesInput,
      OutputTypesUnion,
      DescribeClientVpnRoutesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeClientVpnRoutes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClientVpnRoutesInput,
    DescribeClientVpnRoutesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeClientVpnRoutesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClientVpnRoutesInput,
    DescribeClientVpnRoutesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeClientVpnRoutesInput, DescribeClientVpnRoutesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
