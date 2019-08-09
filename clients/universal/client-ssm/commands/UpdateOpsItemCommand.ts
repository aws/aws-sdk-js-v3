import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateOpsItem } from "../model/UpdateOpsItem";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateOpsItemInput } from "../types/UpdateOpsItemInput";
import { UpdateOpsItemOutput } from "../types/UpdateOpsItemOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/UpdateOpsItemInput";
export * from "../types/UpdateOpsItemOutput";
export * from "../types/UpdateOpsItemExceptionsUnion";

export class UpdateOpsItemCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateOpsItemInput,
      OutputTypesUnion,
      UpdateOpsItemOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateOpsItem;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateOpsItemInput,
    UpdateOpsItemOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateOpsItemInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateOpsItemInput, UpdateOpsItemOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateOpsItemInput, UpdateOpsItemOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
