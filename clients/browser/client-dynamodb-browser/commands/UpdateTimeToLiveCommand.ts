import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateTimeToLive } from "../model/operations/UpdateTimeToLive";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateTimeToLiveInput } from "../types/UpdateTimeToLiveInput";
import { UpdateTimeToLiveOutput } from "../types/UpdateTimeToLiveOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/UpdateTimeToLiveInput";
export * from "../types/UpdateTimeToLiveOutput";
export * from "../types/UpdateTimeToLiveExceptionsUnion";

export class UpdateTimeToLiveCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateTimeToLiveInput,
      OutputTypesUnion,
      UpdateTimeToLiveOutput,
      DynamoDBResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateTimeToLive;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateTimeToLiveInput,
    UpdateTimeToLiveOutput,
    Blob
  >();

  constructor(readonly input: UpdateTimeToLiveInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateTimeToLiveInput, UpdateTimeToLiveOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateTimeToLiveInput, UpdateTimeToLiveOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
