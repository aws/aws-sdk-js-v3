import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDomains } from "../model/operations/DescribeDomains";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDomainsInput } from "../types/DescribeDomainsInput";
import { DescribeDomainsOutput } from "../types/DescribeDomainsOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DescribeDomainsInput";
export * from "../types/DescribeDomainsOutput";
export * from "../types/DescribeDomainsExceptionsUnion";

export class DescribeDomainsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDomainsInput,
      OutputTypesUnion,
      DescribeDomainsOutput,
      CloudSearchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDomains;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDomainsInput,
    DescribeDomainsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDomainsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeDomainsInput, DescribeDomainsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDomainsInput, DescribeDomainsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
