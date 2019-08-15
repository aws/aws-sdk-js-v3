import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterEventTopic } from "../model/operations/DeregisterEventTopic";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterEventTopicInput } from "../types/DeregisterEventTopicInput";
import { DeregisterEventTopicOutput } from "../types/DeregisterEventTopicOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/DeregisterEventTopicInput";
export * from "../types/DeregisterEventTopicOutput";
export * from "../types/DeregisterEventTopicExceptionsUnion";

export class DeregisterEventTopicCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterEventTopicInput,
      OutputTypesUnion,
      DeregisterEventTopicOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeregisterEventTopic;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterEventTopicInput,
    DeregisterEventTopicOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterEventTopicInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterEventTopicInput,
    DeregisterEventTopicOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterEventTopicInput, DeregisterEventTopicOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
