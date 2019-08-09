import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeNodeAssociationStatus } from "../model/DescribeNodeAssociationStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeNodeAssociationStatusInput } from "../types/DescribeNodeAssociationStatusInput";
import { DescribeNodeAssociationStatusOutput } from "../types/DescribeNodeAssociationStatusOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/DescribeNodeAssociationStatusInput";
export * from "../types/DescribeNodeAssociationStatusOutput";
export * from "../types/DescribeNodeAssociationStatusExceptionsUnion";

export class DescribeNodeAssociationStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeNodeAssociationStatusInput,
      OutputTypesUnion,
      DescribeNodeAssociationStatusOutput,
      OpsWorksCMResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeNodeAssociationStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeNodeAssociationStatusInput,
    DescribeNodeAssociationStatusOutput,
    Blob
  >();

  constructor(readonly input: DescribeNodeAssociationStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeNodeAssociationStatusInput,
    DescribeNodeAssociationStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeNodeAssociationStatusInput,
        DescribeNodeAssociationStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
