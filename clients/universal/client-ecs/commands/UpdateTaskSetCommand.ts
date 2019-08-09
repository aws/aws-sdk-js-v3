import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateTaskSet } from "../model/UpdateTaskSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateTaskSetInput } from "../types/UpdateTaskSetInput";
import { UpdateTaskSetOutput } from "../types/UpdateTaskSetOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/UpdateTaskSetInput";
export * from "../types/UpdateTaskSetOutput";
export * from "../types/UpdateTaskSetExceptionsUnion";

export class UpdateTaskSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateTaskSetInput,
      OutputTypesUnion,
      UpdateTaskSetOutput,
      ECSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateTaskSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateTaskSetInput,
    UpdateTaskSetOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateTaskSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateTaskSetInput, UpdateTaskSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateTaskSetInput, UpdateTaskSetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
