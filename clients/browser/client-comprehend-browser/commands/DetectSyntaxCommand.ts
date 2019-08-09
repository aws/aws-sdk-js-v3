import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetectSyntax } from "../model/DetectSyntax";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetectSyntaxInput } from "../types/DetectSyntaxInput";
import { DetectSyntaxOutput } from "../types/DetectSyntaxOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/DetectSyntaxInput";
export * from "../types/DetectSyntaxOutput";
export * from "../types/DetectSyntaxExceptionsUnion";

export class DetectSyntaxCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetectSyntaxInput,
      OutputTypesUnion,
      DetectSyntaxOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = DetectSyntax;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectSyntaxInput,
    DetectSyntaxOutput,
    Blob
  >();

  constructor(readonly input: DetectSyntaxInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<DetectSyntaxInput, DetectSyntaxOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetectSyntaxInput, DetectSyntaxOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
