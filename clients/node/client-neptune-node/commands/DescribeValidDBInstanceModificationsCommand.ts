import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeValidDBInstanceModifications } from "../model/DescribeValidDBInstanceModifications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeValidDBInstanceModificationsInput } from "../types/DescribeValidDBInstanceModificationsInput";
import { DescribeValidDBInstanceModificationsOutput } from "../types/DescribeValidDBInstanceModificationsOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/DescribeValidDBInstanceModificationsInput";
export * from "../types/DescribeValidDBInstanceModificationsOutput";
export * from "../types/DescribeValidDBInstanceModificationsExceptionsUnion";

export class DescribeValidDBInstanceModificationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeValidDBInstanceModificationsInput,
      OutputTypesUnion,
      DescribeValidDBInstanceModificationsOutput,
      NeptuneResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeValidDBInstanceModifications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeValidDBInstanceModificationsInput,
    DescribeValidDBInstanceModificationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeValidDBInstanceModificationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeValidDBInstanceModificationsInput,
    DescribeValidDBInstanceModificationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeValidDBInstanceModificationsInput,
        DescribeValidDBInstanceModificationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
