import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateOpsItem } from "../model/CreateOpsItem";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateOpsItemInput } from "../types/CreateOpsItemInput";
import { CreateOpsItemOutput } from "../types/CreateOpsItemOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/CreateOpsItemInput";
export * from "../types/CreateOpsItemOutput";
export * from "../types/CreateOpsItemExceptionsUnion";

export class CreateOpsItemCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateOpsItemInput,
      OutputTypesUnion,
      CreateOpsItemOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = CreateOpsItem;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateOpsItemInput,
    CreateOpsItemOutput,
    Blob
  >();

  constructor(readonly input: CreateOpsItemInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateOpsItemInput, CreateOpsItemOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateOpsItemInput, CreateOpsItemOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
