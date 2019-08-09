import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TestAuthorization } from "../model/TestAuthorization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TestAuthorizationInput } from "../types/TestAuthorizationInput";
import { TestAuthorizationOutput } from "../types/TestAuthorizationOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/TestAuthorizationInput";
export * from "../types/TestAuthorizationOutput";
export * from "../types/TestAuthorizationExceptionsUnion";

export class TestAuthorizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TestAuthorizationInput,
      OutputTypesUnion,
      TestAuthorizationOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = TestAuthorization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TestAuthorizationInput,
    TestAuthorizationOutput,
    Uint8Array
  >();

  constructor(readonly input: TestAuthorizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<TestAuthorizationInput, TestAuthorizationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TestAuthorizationInput, TestAuthorizationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
