import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateJobQueue } from "../model/UpdateJobQueue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateJobQueueInput } from "../types/UpdateJobQueueInput";
import { UpdateJobQueueOutput } from "../types/UpdateJobQueueOutput";
import { BatchResolvedConfiguration } from "../BatchConfiguration";
export * from "../types/UpdateJobQueueInput";
export * from "../types/UpdateJobQueueOutput";
export * from "../types/UpdateJobQueueExceptionsUnion";

export class UpdateJobQueueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateJobQueueInput,
      OutputTypesUnion,
      UpdateJobQueueOutput,
      BatchResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateJobQueue;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateJobQueueInput,
    UpdateJobQueueOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateJobQueueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: BatchResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateJobQueueInput, UpdateJobQueueOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateJobQueueInput, UpdateJobQueueOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
