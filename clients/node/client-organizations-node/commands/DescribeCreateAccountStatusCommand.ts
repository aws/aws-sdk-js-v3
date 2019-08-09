import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCreateAccountStatus } from "../model/DescribeCreateAccountStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCreateAccountStatusInput } from "../types/DescribeCreateAccountStatusInput";
import { DescribeCreateAccountStatusOutput } from "../types/DescribeCreateAccountStatusOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/DescribeCreateAccountStatusInput";
export * from "../types/DescribeCreateAccountStatusOutput";
export * from "../types/DescribeCreateAccountStatusExceptionsUnion";

export class DescribeCreateAccountStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCreateAccountStatusInput,
      OutputTypesUnion,
      DescribeCreateAccountStatusOutput,
      OrganizationsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCreateAccountStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCreateAccountStatusInput,
    DescribeCreateAccountStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCreateAccountStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCreateAccountStatusInput,
    DescribeCreateAccountStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeCreateAccountStatusInput,
        DescribeCreateAccountStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
