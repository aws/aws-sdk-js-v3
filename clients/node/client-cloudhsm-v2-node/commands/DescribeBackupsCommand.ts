import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeBackups } from "../model/DescribeBackups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBackupsInput } from "../types/DescribeBackupsInput";
import { DescribeBackupsOutput } from "../types/DescribeBackupsOutput";
import { CloudHSMV2ResolvedConfiguration } from "../CloudHSMV2Configuration";
export * from "../types/DescribeBackupsInput";
export * from "../types/DescribeBackupsOutput";
export * from "../types/DescribeBackupsExceptionsUnion";

export class DescribeBackupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBackupsInput,
      OutputTypesUnion,
      DescribeBackupsOutput,
      CloudHSMV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeBackups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBackupsInput,
    DescribeBackupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeBackupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudHSMV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeBackupsInput, DescribeBackupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeBackupsInput, DescribeBackupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
