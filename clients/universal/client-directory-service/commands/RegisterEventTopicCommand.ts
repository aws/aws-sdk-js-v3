import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterEventTopic } from "../model/RegisterEventTopic";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterEventTopicInput } from "../types/RegisterEventTopicInput";
import { RegisterEventTopicOutput } from "../types/RegisterEventTopicOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/RegisterEventTopicInput";
export * from "../types/RegisterEventTopicOutput";
export * from "../types/RegisterEventTopicExceptionsUnion";

export class RegisterEventTopicCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterEventTopicInput,
      OutputTypesUnion,
      RegisterEventTopicOutput,
      DirectoryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RegisterEventTopic;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterEventTopicInput,
    RegisterEventTopicOutput,
    Uint8Array
  >();

  constructor(readonly input: RegisterEventTopicInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterEventTopicInput,
    RegisterEventTopicOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterEventTopicInput, RegisterEventTopicOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
