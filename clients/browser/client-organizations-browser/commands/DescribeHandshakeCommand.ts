import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeHandshake } from "../model/DescribeHandshake";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeHandshakeInput } from "../types/DescribeHandshakeInput";
import { DescribeHandshakeOutput } from "../types/DescribeHandshakeOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/DescribeHandshakeInput";
export * from "../types/DescribeHandshakeOutput";
export * from "../types/DescribeHandshakeExceptionsUnion";

export class DescribeHandshakeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeHandshakeInput,
      OutputTypesUnion,
      DescribeHandshakeOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeHandshake;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeHandshakeInput,
    DescribeHandshakeOutput,
    Blob
  >();

  constructor(readonly input: DescribeHandshakeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeHandshakeInput, DescribeHandshakeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeHandshakeInput, DescribeHandshakeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
