import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListMeshes } from "../model/ListMeshes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListMeshesInput } from "../types/ListMeshesInput";
import { ListMeshesOutput } from "../types/ListMeshesOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/ListMeshesInput";
export * from "../types/ListMeshesOutput";
export * from "../types/ListMeshesExceptionsUnion";

export class ListMeshesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListMeshesInput,
      OutputTypesUnion,
      ListMeshesOutput,
      AppMeshResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListMeshes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListMeshesInput,
    ListMeshesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListMeshesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<ListMeshesInput, ListMeshesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListMeshesInput, ListMeshesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
