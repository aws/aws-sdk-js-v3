import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetQueue } from "../model/operations/GetQueue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetQueueInput } from "../types/GetQueueInput";
import { GetQueueOutput } from "../types/GetQueueOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
export * from "../types/GetQueueInput";
export * from "../types/GetQueueOutput";
export * from "../types/GetQueueExceptionsUnion";

export class GetQueueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetQueueInput,
      OutputTypesUnion,
      GetQueueOutput,
      MediaConvertResolvedConfiguration,
      Blob
    > {
  readonly model = GetQueue;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetQueueInput,
    GetQueueOutput,
    Blob
  >();

  constructor(readonly input: GetQueueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaConvertResolvedConfiguration
  ): __aws_sdk_types.Handler<GetQueueInput, GetQueueOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetQueueInput, GetQueueOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
