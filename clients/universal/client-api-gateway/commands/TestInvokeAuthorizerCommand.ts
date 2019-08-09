import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TestInvokeAuthorizer } from "../model/TestInvokeAuthorizer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TestInvokeAuthorizerInput } from "../types/TestInvokeAuthorizerInput";
import { TestInvokeAuthorizerOutput } from "../types/TestInvokeAuthorizerOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/TestInvokeAuthorizerInput";
export * from "../types/TestInvokeAuthorizerOutput";
export * from "../types/TestInvokeAuthorizerExceptionsUnion";

export class TestInvokeAuthorizerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TestInvokeAuthorizerInput,
      OutputTypesUnion,
      TestInvokeAuthorizerOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = TestInvokeAuthorizer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TestInvokeAuthorizerInput,
    TestInvokeAuthorizerOutput,
    Uint8Array
  >();

  constructor(readonly input: TestInvokeAuthorizerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    TestInvokeAuthorizerInput,
    TestInvokeAuthorizerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TestInvokeAuthorizerInput, TestInvokeAuthorizerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
