import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeHapg } from "../model/operations/DescribeHapg";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeHapgInput } from "../types/DescribeHapgInput";
import { DescribeHapgOutput } from "../types/DescribeHapgOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/DescribeHapgInput";
export * from "../types/DescribeHapgOutput";
export * from "../types/DescribeHapgExceptionsUnion";

export class DescribeHapgCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeHapgInput,
      OutputTypesUnion,
      DescribeHapgOutput,
      CloudHSMResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeHapg;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeHapgInput,
    DescribeHapgOutput,
    Blob
  >();

  constructor(readonly input: DescribeHapgInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeHapgInput, DescribeHapgOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeHapgInput, DescribeHapgOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
