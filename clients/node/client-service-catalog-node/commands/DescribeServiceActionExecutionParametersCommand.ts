import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeServiceActionExecutionParameters } from "../model/DescribeServiceActionExecutionParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeServiceActionExecutionParametersInput } from "../types/DescribeServiceActionExecutionParametersInput";
import { DescribeServiceActionExecutionParametersOutput } from "../types/DescribeServiceActionExecutionParametersOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeServiceActionExecutionParametersInput";
export * from "../types/DescribeServiceActionExecutionParametersOutput";
export * from "../types/DescribeServiceActionExecutionParametersExceptionsUnion";

export class DescribeServiceActionExecutionParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeServiceActionExecutionParametersInput,
      OutputTypesUnion,
      DescribeServiceActionExecutionParametersOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeServiceActionExecutionParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeServiceActionExecutionParametersInput,
    DescribeServiceActionExecutionParametersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeServiceActionExecutionParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeServiceActionExecutionParametersInput,
    DescribeServiceActionExecutionParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeServiceActionExecutionParametersInput,
        DescribeServiceActionExecutionParametersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
