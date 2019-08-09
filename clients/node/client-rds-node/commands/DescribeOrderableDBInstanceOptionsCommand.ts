import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeOrderableDBInstanceOptions } from "../model/DescribeOrderableDBInstanceOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeOrderableDBInstanceOptionsInput } from "../types/DescribeOrderableDBInstanceOptionsInput";
import { DescribeOrderableDBInstanceOptionsOutput } from "../types/DescribeOrderableDBInstanceOptionsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeOrderableDBInstanceOptionsInput";
export * from "../types/DescribeOrderableDBInstanceOptionsOutput";
export * from "../types/DescribeOrderableDBInstanceOptionsExceptionsUnion";

export class DescribeOrderableDBInstanceOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeOrderableDBInstanceOptionsInput,
      OutputTypesUnion,
      DescribeOrderableDBInstanceOptionsOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeOrderableDBInstanceOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeOrderableDBInstanceOptionsInput,
    DescribeOrderableDBInstanceOptionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeOrderableDBInstanceOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeOrderableDBInstanceOptionsInput,
    DescribeOrderableDBInstanceOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeOrderableDBInstanceOptionsInput,
        DescribeOrderableDBInstanceOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
