import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeOriginEndpoint } from "../model/DescribeOriginEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeOriginEndpointInput } from "../types/DescribeOriginEndpointInput";
import { DescribeOriginEndpointOutput } from "../types/DescribeOriginEndpointOutput";
import { MediaPackageResolvedConfiguration } from "../MediaPackageConfiguration";
export * from "../types/DescribeOriginEndpointInput";
export * from "../types/DescribeOriginEndpointOutput";
export * from "../types/DescribeOriginEndpointExceptionsUnion";

export class DescribeOriginEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeOriginEndpointInput,
      OutputTypesUnion,
      DescribeOriginEndpointOutput,
      MediaPackageResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeOriginEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeOriginEndpointInput,
    DescribeOriginEndpointOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeOriginEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaPackageResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeOriginEndpointInput,
    DescribeOriginEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeOriginEndpointInput, DescribeOriginEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
