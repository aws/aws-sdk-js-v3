import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { Publish } from "../model/Publish";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PublishInput } from "../types/PublishInput";
import { PublishOutput } from "../types/PublishOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/PublishInput";
export * from "../types/PublishOutput";
export * from "../types/PublishExceptionsUnion";

export class PublishCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PublishInput,
      OutputTypesUnion,
      PublishOutput,
      SNSResolvedConfiguration,
      Blob
    > {
  readonly model = Publish;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PublishInput,
    PublishOutput,
    Blob
  >();

  constructor(readonly input: PublishInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<PublishInput, PublishOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PublishInput, PublishOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
