import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TestAuthorization } from "../model/operations/TestAuthorization";
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
      _stream.Readable
    > {
  readonly model = TestAuthorization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TestAuthorizationInput,
    TestAuthorizationOutput,
    _stream.Readable
  >();

  constructor(readonly input: TestAuthorizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
