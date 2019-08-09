import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateAccessKey } from "../model/UpdateAccessKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAccessKeyInput } from "../types/UpdateAccessKeyInput";
import { UpdateAccessKeyOutput } from "../types/UpdateAccessKeyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UpdateAccessKeyInput";
export * from "../types/UpdateAccessKeyOutput";
export * from "../types/UpdateAccessKeyExceptionsUnion";

export class UpdateAccessKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAccessKeyInput,
      OutputTypesUnion,
      UpdateAccessKeyOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateAccessKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAccessKeyInput,
    UpdateAccessKeyOutput,
    Blob
  >();

  constructor(readonly input: UpdateAccessKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateAccessKeyInput, UpdateAccessKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAccessKeyInput, UpdateAccessKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
