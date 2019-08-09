import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateQueue } from "../model/CreateQueue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateQueueInput } from "../types/CreateQueueInput";
import { CreateQueueOutput } from "../types/CreateQueueOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/CreateQueueInput";
export * from "../types/CreateQueueOutput";
export * from "../types/CreateQueueExceptionsUnion";

export class CreateQueueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateQueueInput,
      OutputTypesUnion,
      CreateQueueOutput,
      SQSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateQueue;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateQueueInput,
    CreateQueueOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateQueueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateQueueInput, CreateQueueOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateQueueInput, CreateQueueOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
