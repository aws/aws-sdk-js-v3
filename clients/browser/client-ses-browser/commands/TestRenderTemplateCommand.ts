import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TestRenderTemplate } from "../model/TestRenderTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TestRenderTemplateInput } from "../types/TestRenderTemplateInput";
import { TestRenderTemplateOutput } from "../types/TestRenderTemplateOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/TestRenderTemplateInput";
export * from "../types/TestRenderTemplateOutput";
export * from "../types/TestRenderTemplateExceptionsUnion";

export class TestRenderTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TestRenderTemplateInput,
      OutputTypesUnion,
      TestRenderTemplateOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = TestRenderTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TestRenderTemplateInput,
    TestRenderTemplateOutput,
    Blob
  >();

  constructor(readonly input: TestRenderTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    TestRenderTemplateInput,
    TestRenderTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TestRenderTemplateInput, TestRenderTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
