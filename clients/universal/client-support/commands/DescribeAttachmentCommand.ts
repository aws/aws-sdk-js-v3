import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAttachment } from "../model/DescribeAttachment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAttachmentInput } from "../types/DescribeAttachmentInput";
import { DescribeAttachmentOutput } from "../types/DescribeAttachmentOutput";
import { SupportResolvedConfiguration } from "../SupportConfiguration";
export * from "../types/DescribeAttachmentInput";
export * from "../types/DescribeAttachmentOutput";
export * from "../types/DescribeAttachmentExceptionsUnion";

export class DescribeAttachmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAttachmentInput,
      OutputTypesUnion,
      DescribeAttachmentOutput,
      SupportResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeAttachment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAttachmentInput,
    DescribeAttachmentOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeAttachmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SupportResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAttachmentInput,
    DescribeAttachmentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAttachmentInput, DescribeAttachmentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
