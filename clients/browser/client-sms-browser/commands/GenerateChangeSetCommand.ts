import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GenerateChangeSet } from "../model/operations/GenerateChangeSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GenerateChangeSetInput } from "../types/GenerateChangeSetInput";
import { GenerateChangeSetOutput } from "../types/GenerateChangeSetOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/GenerateChangeSetInput";
export * from "../types/GenerateChangeSetOutput";
export * from "../types/GenerateChangeSetExceptionsUnion";

export class GenerateChangeSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GenerateChangeSetInput,
      OutputTypesUnion,
      GenerateChangeSetOutput,
      SMSResolvedConfiguration,
      Blob
    > {
  readonly model = GenerateChangeSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GenerateChangeSetInput,
    GenerateChangeSetOutput,
    Blob
  >();

  constructor(readonly input: GenerateChangeSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<GenerateChangeSetInput, GenerateChangeSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GenerateChangeSetInput, GenerateChangeSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
