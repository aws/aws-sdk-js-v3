import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeOperatingSystems } from "../model/DescribeOperatingSystems";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeOperatingSystemsInput } from "../types/DescribeOperatingSystemsInput";
import { DescribeOperatingSystemsOutput } from "../types/DescribeOperatingSystemsOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeOperatingSystemsInput";
export * from "../types/DescribeOperatingSystemsOutput";
export * from "../types/DescribeOperatingSystemsExceptionsUnion";

export class DescribeOperatingSystemsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeOperatingSystemsInput,
      OutputTypesUnion,
      DescribeOperatingSystemsOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeOperatingSystems;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeOperatingSystemsInput,
    DescribeOperatingSystemsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeOperatingSystemsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeOperatingSystemsInput,
    DescribeOperatingSystemsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeOperatingSystemsInput, DescribeOperatingSystemsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
