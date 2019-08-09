import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVolumesModifications } from "../model/DescribeVolumesModifications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVolumesModificationsInput } from "../types/DescribeVolumesModificationsInput";
import { DescribeVolumesModificationsOutput } from "../types/DescribeVolumesModificationsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVolumesModificationsInput";
export * from "../types/DescribeVolumesModificationsOutput";
export * from "../types/DescribeVolumesModificationsExceptionsUnion";

export class DescribeVolumesModificationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVolumesModificationsInput,
      OutputTypesUnion,
      DescribeVolumesModificationsOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeVolumesModifications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVolumesModificationsInput,
    DescribeVolumesModificationsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeVolumesModificationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVolumesModificationsInput,
    DescribeVolumesModificationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeVolumesModificationsInput,
        DescribeVolumesModificationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
