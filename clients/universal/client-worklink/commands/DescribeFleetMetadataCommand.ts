import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeFleetMetadata } from "../model/DescribeFleetMetadata";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFleetMetadataInput } from "../types/DescribeFleetMetadataInput";
import { DescribeFleetMetadataOutput } from "../types/DescribeFleetMetadataOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/DescribeFleetMetadataInput";
export * from "../types/DescribeFleetMetadataOutput";
export * from "../types/DescribeFleetMetadataExceptionsUnion";

export class DescribeFleetMetadataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFleetMetadataInput,
      OutputTypesUnion,
      DescribeFleetMetadataOutput,
      WorkLinkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeFleetMetadata;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFleetMetadataInput,
    DescribeFleetMetadataOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeFleetMetadataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeFleetMetadataInput,
    DescribeFleetMetadataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFleetMetadataInput, DescribeFleetMetadataOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
