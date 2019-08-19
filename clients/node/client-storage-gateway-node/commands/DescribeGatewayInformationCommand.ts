import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeGatewayInformation } from "../model/operations/DescribeGatewayInformation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeGatewayInformationInput } from "../types/DescribeGatewayInformationInput";
import { DescribeGatewayInformationOutput } from "../types/DescribeGatewayInformationOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeGatewayInformationInput";
export * from "../types/DescribeGatewayInformationOutput";
export * from "../types/DescribeGatewayInformationExceptionsUnion";

export class DescribeGatewayInformationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeGatewayInformationInput,
      OutputTypesUnion,
      DescribeGatewayInformationOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeGatewayInformation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeGatewayInformationInput,
    DescribeGatewayInformationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeGatewayInformationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeGatewayInformationInput,
    DescribeGatewayInformationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeGatewayInformationInput,
        DescribeGatewayInformationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
