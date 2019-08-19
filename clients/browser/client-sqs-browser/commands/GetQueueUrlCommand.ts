import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetQueueUrl } from "../model/operations/GetQueueUrl";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetQueueUrlInput } from "../types/GetQueueUrlInput";
import { GetQueueUrlOutput } from "../types/GetQueueUrlOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/GetQueueUrlInput";
export * from "../types/GetQueueUrlOutput";
export * from "../types/GetQueueUrlExceptionsUnion";

export class GetQueueUrlCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetQueueUrlInput,
      OutputTypesUnion,
      GetQueueUrlOutput,
      SQSResolvedConfiguration,
      Blob
    > {
  readonly model = GetQueueUrl;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetQueueUrlInput,
    GetQueueUrlOutput,
    Blob
  >();

  constructor(readonly input: GetQueueUrlInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<GetQueueUrlInput, GetQueueUrlOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetQueueUrlInput, GetQueueUrlOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
