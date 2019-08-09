import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDBInstanceAutomatedBackups } from "../model/DescribeDBInstanceAutomatedBackups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBInstanceAutomatedBackupsInput } from "../types/DescribeDBInstanceAutomatedBackupsInput";
import { DescribeDBInstanceAutomatedBackupsOutput } from "../types/DescribeDBInstanceAutomatedBackupsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeDBInstanceAutomatedBackupsInput";
export * from "../types/DescribeDBInstanceAutomatedBackupsOutput";
export * from "../types/DescribeDBInstanceAutomatedBackupsExceptionsUnion";

export class DescribeDBInstanceAutomatedBackupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBInstanceAutomatedBackupsInput,
      OutputTypesUnion,
      DescribeDBInstanceAutomatedBackupsOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDBInstanceAutomatedBackups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBInstanceAutomatedBackupsInput,
    DescribeDBInstanceAutomatedBackupsOutput,
    Blob
  >();

  constructor(readonly input: DescribeDBInstanceAutomatedBackupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBInstanceAutomatedBackupsInput,
    DescribeDBInstanceAutomatedBackupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDBInstanceAutomatedBackupsInput,
        DescribeDBInstanceAutomatedBackupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
