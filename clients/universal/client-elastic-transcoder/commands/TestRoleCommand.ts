import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TestRole } from "../model/TestRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TestRoleInput } from "../types/TestRoleInput";
import { TestRoleOutput } from "../types/TestRoleOutput";
import { ElasticTranscoderResolvedConfiguration } from "../ElasticTranscoderConfiguration";
export * from "../types/TestRoleInput";
export * from "../types/TestRoleOutput";
export * from "../types/TestRoleExceptionsUnion";

export class TestRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TestRoleInput,
      OutputTypesUnion,
      TestRoleOutput,
      ElasticTranscoderResolvedConfiguration,
      Uint8Array
    > {
  readonly model = TestRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TestRoleInput,
    TestRoleOutput,
    Uint8Array
  >();

  constructor(readonly input: TestRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticTranscoderResolvedConfiguration
  ): __aws_sdk_types.Handler<TestRoleInput, TestRoleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TestRoleInput, TestRoleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
