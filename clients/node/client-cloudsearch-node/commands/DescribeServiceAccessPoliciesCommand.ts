import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeServiceAccessPolicies } from "../model/operations/DescribeServiceAccessPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeServiceAccessPoliciesInput } from "../types/DescribeServiceAccessPoliciesInput";
import { DescribeServiceAccessPoliciesOutput } from "../types/DescribeServiceAccessPoliciesOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DescribeServiceAccessPoliciesInput";
export * from "../types/DescribeServiceAccessPoliciesOutput";
export * from "../types/DescribeServiceAccessPoliciesExceptionsUnion";

export class DescribeServiceAccessPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeServiceAccessPoliciesInput,
      OutputTypesUnion,
      DescribeServiceAccessPoliciesOutput,
      CloudSearchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeServiceAccessPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeServiceAccessPoliciesInput,
    DescribeServiceAccessPoliciesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeServiceAccessPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeServiceAccessPoliciesInput,
    DescribeServiceAccessPoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeServiceAccessPoliciesInput,
        DescribeServiceAccessPoliciesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
