import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeModelPackage } from "../model/DescribeModelPackage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeModelPackageInput } from "../types/DescribeModelPackageInput";
import { DescribeModelPackageOutput } from "../types/DescribeModelPackageOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DescribeModelPackageInput";
export * from "../types/DescribeModelPackageOutput";
export * from "../types/DescribeModelPackageExceptionsUnion";

export class DescribeModelPackageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeModelPackageInput,
      OutputTypesUnion,
      DescribeModelPackageOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeModelPackage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeModelPackageInput,
    DescribeModelPackageOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeModelPackageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeModelPackageInput,
    DescribeModelPackageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeModelPackageInput, DescribeModelPackageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
