import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeNetworkInterfacePermissions } from "../model/DescribeNetworkInterfacePermissions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeNetworkInterfacePermissionsInput } from "../types/DescribeNetworkInterfacePermissionsInput";
import { DescribeNetworkInterfacePermissionsOutput } from "../types/DescribeNetworkInterfacePermissionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeNetworkInterfacePermissionsInput";
export * from "../types/DescribeNetworkInterfacePermissionsOutput";
export * from "../types/DescribeNetworkInterfacePermissionsExceptionsUnion";

export class DescribeNetworkInterfacePermissionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeNetworkInterfacePermissionsInput,
      OutputTypesUnion,
      DescribeNetworkInterfacePermissionsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeNetworkInterfacePermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeNetworkInterfacePermissionsInput,
    DescribeNetworkInterfacePermissionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeNetworkInterfacePermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeNetworkInterfacePermissionsInput,
    DescribeNetworkInterfacePermissionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeNetworkInterfacePermissionsInput,
        DescribeNetworkInterfacePermissionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
