import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddCache } from "../model/AddCache";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddCacheInput } from "../types/AddCacheInput";
import { AddCacheOutput } from "../types/AddCacheOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/AddCacheInput";
export * from "../types/AddCacheOutput";
export * from "../types/AddCacheExceptionsUnion";

export class AddCacheCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddCacheInput,
      OutputTypesUnion,
      AddCacheOutput,
      StorageGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AddCache;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddCacheInput,
    AddCacheOutput,
    Uint8Array
  >();

  constructor(readonly input: AddCacheInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<AddCacheInput, AddCacheOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddCacheInput, AddCacheOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
