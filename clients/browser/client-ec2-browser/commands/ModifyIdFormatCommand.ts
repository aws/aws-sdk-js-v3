import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyIdFormat } from "../model/ModifyIdFormat";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyIdFormatInput } from "../types/ModifyIdFormatInput";
import { ModifyIdFormatOutput } from "../types/ModifyIdFormatOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyIdFormatInput";
export * from "../types/ModifyIdFormatOutput";
export * from "../types/ModifyIdFormatExceptionsUnion";

export class ModifyIdFormatCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyIdFormatInput,
      OutputTypesUnion,
      ModifyIdFormatOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyIdFormat;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyIdFormatInput,
    ModifyIdFormatOutput,
    Blob
  >();

  constructor(readonly input: ModifyIdFormatInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyIdFormatInput, ModifyIdFormatOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyIdFormatInput, ModifyIdFormatOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
