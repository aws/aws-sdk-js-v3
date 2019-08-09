import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateWorkerBlock } from "../model/CreateWorkerBlock";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateWorkerBlockInput } from "../types/CreateWorkerBlockInput";
import { CreateWorkerBlockOutput } from "../types/CreateWorkerBlockOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/CreateWorkerBlockInput";
export * from "../types/CreateWorkerBlockOutput";
export * from "../types/CreateWorkerBlockExceptionsUnion";

export class CreateWorkerBlockCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateWorkerBlockInput,
      OutputTypesUnion,
      CreateWorkerBlockOutput,
      MTurkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateWorkerBlock;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateWorkerBlockInput,
    CreateWorkerBlockOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateWorkerBlockInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateWorkerBlockInput, CreateWorkerBlockOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateWorkerBlockInput, CreateWorkerBlockOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
