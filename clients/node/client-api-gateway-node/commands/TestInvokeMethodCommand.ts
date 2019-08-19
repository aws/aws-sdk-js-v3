import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TestInvokeMethod } from "../model/operations/TestInvokeMethod";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TestInvokeMethodInput } from "../types/TestInvokeMethodInput";
import { TestInvokeMethodOutput } from "../types/TestInvokeMethodOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/TestInvokeMethodInput";
export * from "../types/TestInvokeMethodOutput";
export * from "../types/TestInvokeMethodExceptionsUnion";

export class TestInvokeMethodCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TestInvokeMethodInput,
      OutputTypesUnion,
      TestInvokeMethodOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = TestInvokeMethod;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TestInvokeMethodInput,
    TestInvokeMethodOutput,
    _stream.Readable
  >();

  constructor(readonly input: TestInvokeMethodInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<TestInvokeMethodInput, TestInvokeMethodOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TestInvokeMethodInput, TestInvokeMethodOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
