import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateLocationNfs } from "../model/CreateLocationNfs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLocationNfsInput } from "../types/CreateLocationNfsInput";
import { CreateLocationNfsOutput } from "../types/CreateLocationNfsOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/CreateLocationNfsInput";
export * from "../types/CreateLocationNfsOutput";
export * from "../types/CreateLocationNfsExceptionsUnion";

export class CreateLocationNfsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLocationNfsInput,
      OutputTypesUnion,
      CreateLocationNfsOutput,
      DataSyncResolvedConfiguration,
      Blob
    > {
  readonly model = CreateLocationNfs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLocationNfsInput,
    CreateLocationNfsOutput,
    Blob
  >();

  constructor(readonly input: CreateLocationNfsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateLocationNfsInput, CreateLocationNfsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLocationNfsInput, CreateLocationNfsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
