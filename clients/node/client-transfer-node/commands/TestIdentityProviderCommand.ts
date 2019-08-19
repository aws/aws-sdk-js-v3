import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TestIdentityProvider } from "../model/operations/TestIdentityProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TestIdentityProviderInput } from "../types/TestIdentityProviderInput";
import { TestIdentityProviderOutput } from "../types/TestIdentityProviderOutput";
import { TransferResolvedConfiguration } from "../TransferConfiguration";
export * from "../types/TestIdentityProviderInput";
export * from "../types/TestIdentityProviderOutput";
export * from "../types/TestIdentityProviderExceptionsUnion";

export class TestIdentityProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TestIdentityProviderInput,
      OutputTypesUnion,
      TestIdentityProviderOutput,
      TransferResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = TestIdentityProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TestIdentityProviderInput,
    TestIdentityProviderOutput,
    _stream.Readable
  >();

  constructor(readonly input: TestIdentityProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TransferResolvedConfiguration
  ): __aws_sdk_types.Handler<
    TestIdentityProviderInput,
    TestIdentityProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TestIdentityProviderInput, TestIdentityProviderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
