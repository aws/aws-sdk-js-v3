import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateStack } from "../model/operations/UpdateStack";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateStackInput } from "../types/UpdateStackInput";
import { UpdateStackOutput } from "../types/UpdateStackOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/UpdateStackInput";
export * from "../types/UpdateStackOutput";
export * from "../types/UpdateStackExceptionsUnion";

export class UpdateStackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateStackInput,
      OutputTypesUnion,
      UpdateStackOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateStack;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateStackInput,
    UpdateStackOutput,
    Blob
  >();

  constructor(readonly input: UpdateStackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateStackInput, UpdateStackOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateStackInput, UpdateStackOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
