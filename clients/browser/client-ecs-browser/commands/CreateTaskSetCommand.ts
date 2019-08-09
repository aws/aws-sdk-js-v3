import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTaskSet } from "../model/CreateTaskSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTaskSetInput } from "../types/CreateTaskSetInput";
import { CreateTaskSetOutput } from "../types/CreateTaskSetOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/CreateTaskSetInput";
export * from "../types/CreateTaskSetOutput";
export * from "../types/CreateTaskSetExceptionsUnion";

export class CreateTaskSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTaskSetInput,
      OutputTypesUnion,
      CreateTaskSetOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = CreateTaskSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTaskSetInput,
    CreateTaskSetOutput,
    Blob
  >();

  constructor(readonly input: CreateTaskSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTaskSetInput, CreateTaskSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTaskSetInput, CreateTaskSetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
