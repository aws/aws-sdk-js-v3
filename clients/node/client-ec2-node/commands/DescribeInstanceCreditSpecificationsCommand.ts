import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeInstanceCreditSpecifications } from "../model/DescribeInstanceCreditSpecifications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInstanceCreditSpecificationsInput } from "../types/DescribeInstanceCreditSpecificationsInput";
import { DescribeInstanceCreditSpecificationsOutput } from "../types/DescribeInstanceCreditSpecificationsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeInstanceCreditSpecificationsInput";
export * from "../types/DescribeInstanceCreditSpecificationsOutput";
export * from "../types/DescribeInstanceCreditSpecificationsExceptionsUnion";

export class DescribeInstanceCreditSpecificationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInstanceCreditSpecificationsInput,
      OutputTypesUnion,
      DescribeInstanceCreditSpecificationsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeInstanceCreditSpecifications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInstanceCreditSpecificationsInput,
    DescribeInstanceCreditSpecificationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeInstanceCreditSpecificationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeInstanceCreditSpecificationsInput,
    DescribeInstanceCreditSpecificationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeInstanceCreditSpecificationsInput,
        DescribeInstanceCreditSpecificationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
