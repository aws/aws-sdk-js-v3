import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RestoreTableToPointInTime } from "../model/RestoreTableToPointInTime";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreTableToPointInTimeInput } from "../types/RestoreTableToPointInTimeInput";
import { RestoreTableToPointInTimeOutput } from "../types/RestoreTableToPointInTimeOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/RestoreTableToPointInTimeInput";
export * from "../types/RestoreTableToPointInTimeOutput";
export * from "../types/RestoreTableToPointInTimeExceptionsUnion";

export class RestoreTableToPointInTimeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreTableToPointInTimeInput,
      OutputTypesUnion,
      RestoreTableToPointInTimeOutput,
      DynamoDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RestoreTableToPointInTime;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreTableToPointInTimeInput,
    RestoreTableToPointInTimeOutput,
    _stream.Readable
  >();

  constructor(readonly input: RestoreTableToPointInTimeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestoreTableToPointInTimeInput,
    RestoreTableToPointInTimeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RestoreTableToPointInTimeInput, RestoreTableToPointInTimeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
