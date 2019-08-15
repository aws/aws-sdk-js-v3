import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEffectiveInstanceAssociations } from "../model/operations/DescribeEffectiveInstanceAssociations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEffectiveInstanceAssociationsInput } from "../types/DescribeEffectiveInstanceAssociationsInput";
import { DescribeEffectiveInstanceAssociationsOutput } from "../types/DescribeEffectiveInstanceAssociationsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeEffectiveInstanceAssociationsInput";
export * from "../types/DescribeEffectiveInstanceAssociationsOutput";
export * from "../types/DescribeEffectiveInstanceAssociationsExceptionsUnion";

export class DescribeEffectiveInstanceAssociationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEffectiveInstanceAssociationsInput,
      OutputTypesUnion,
      DescribeEffectiveInstanceAssociationsOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEffectiveInstanceAssociations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEffectiveInstanceAssociationsInput,
    DescribeEffectiveInstanceAssociationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEffectiveInstanceAssociationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEffectiveInstanceAssociationsInput,
    DescribeEffectiveInstanceAssociationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeEffectiveInstanceAssociationsInput,
        DescribeEffectiveInstanceAssociationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
