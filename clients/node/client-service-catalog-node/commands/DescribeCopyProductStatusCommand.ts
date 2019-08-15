import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCopyProductStatus } from "../model/operations/DescribeCopyProductStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCopyProductStatusInput } from "../types/DescribeCopyProductStatusInput";
import { DescribeCopyProductStatusOutput } from "../types/DescribeCopyProductStatusOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeCopyProductStatusInput";
export * from "../types/DescribeCopyProductStatusOutput";
export * from "../types/DescribeCopyProductStatusExceptionsUnion";

export class DescribeCopyProductStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCopyProductStatusInput,
      OutputTypesUnion,
      DescribeCopyProductStatusOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCopyProductStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCopyProductStatusInput,
    DescribeCopyProductStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCopyProductStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCopyProductStatusInput,
    DescribeCopyProductStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCopyProductStatusInput, DescribeCopyProductStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
