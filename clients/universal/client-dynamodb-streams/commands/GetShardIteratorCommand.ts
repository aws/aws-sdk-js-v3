import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetShardIterator } from "../model/GetShardIterator";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetShardIteratorInput } from "../types/GetShardIteratorInput";
import { GetShardIteratorOutput } from "../types/GetShardIteratorOutput";
import { DynamoDBStreamsResolvedConfiguration } from "../DynamoDBStreamsConfiguration";
export * from "../types/GetShardIteratorInput";
export * from "../types/GetShardIteratorOutput";
export * from "../types/GetShardIteratorExceptionsUnion";

export class GetShardIteratorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetShardIteratorInput,
      OutputTypesUnion,
      GetShardIteratorOutput,
      DynamoDBStreamsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetShardIterator;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetShardIteratorInput,
    GetShardIteratorOutput,
    Uint8Array
  >();

  constructor(readonly input: GetShardIteratorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DynamoDBStreamsResolvedConfiguration
  ): __aws_sdk_types.Handler<GetShardIteratorInput, GetShardIteratorOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetShardIteratorInput, GetShardIteratorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
