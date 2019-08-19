import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateLocationEfs } from "../model/operations/CreateLocationEfs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLocationEfsInput } from "../types/CreateLocationEfsInput";
import { CreateLocationEfsOutput } from "../types/CreateLocationEfsOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/CreateLocationEfsInput";
export * from "../types/CreateLocationEfsOutput";
export * from "../types/CreateLocationEfsExceptionsUnion";

export class CreateLocationEfsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLocationEfsInput,
      OutputTypesUnion,
      CreateLocationEfsOutput,
      DataSyncResolvedConfiguration,
      Blob
    > {
  readonly model = CreateLocationEfs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLocationEfsInput,
    CreateLocationEfsOutput,
    Blob
  >();

  constructor(readonly input: CreateLocationEfsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateLocationEfsInput, CreateLocationEfsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLocationEfsInput, CreateLocationEfsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
