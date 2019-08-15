import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateResourceShare } from "../model/operations/UpdateResourceShare";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateResourceShareInput } from "../types/UpdateResourceShareInput";
import { UpdateResourceShareOutput } from "../types/UpdateResourceShareOutput";
import { RAMResolvedConfiguration } from "../RAMConfiguration";
export * from "../types/UpdateResourceShareInput";
export * from "../types/UpdateResourceShareOutput";
export * from "../types/UpdateResourceShareExceptionsUnion";

export class UpdateResourceShareCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateResourceShareInput,
      OutputTypesUnion,
      UpdateResourceShareOutput,
      RAMResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateResourceShare;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateResourceShareInput,
    UpdateResourceShareOutput,
    Blob
  >();

  constructor(readonly input: UpdateResourceShareInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateResourceShareInput,
    UpdateResourceShareOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateResourceShareInput, UpdateResourceShareOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
