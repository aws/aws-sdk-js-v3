import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSecurityProfile } from "../model/operations/DescribeSecurityProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSecurityProfileInput } from "../types/DescribeSecurityProfileInput";
import { DescribeSecurityProfileOutput } from "../types/DescribeSecurityProfileOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeSecurityProfileInput";
export * from "../types/DescribeSecurityProfileOutput";
export * from "../types/DescribeSecurityProfileExceptionsUnion";

export class DescribeSecurityProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSecurityProfileInput,
      OutputTypesUnion,
      DescribeSecurityProfileOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSecurityProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSecurityProfileInput,
    DescribeSecurityProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSecurityProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSecurityProfileInput,
    DescribeSecurityProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSecurityProfileInput, DescribeSecurityProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
