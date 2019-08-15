import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRoutes } from "../model/operations/ListRoutes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRoutesInput } from "../types/ListRoutesInput";
import { ListRoutesOutput } from "../types/ListRoutesOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/ListRoutesInput";
export * from "../types/ListRoutesOutput";
export * from "../types/ListRoutesExceptionsUnion";

export class ListRoutesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRoutesInput,
      OutputTypesUnion,
      ListRoutesOutput,
      AppMeshResolvedConfiguration,
      Blob
    > {
  readonly model = ListRoutes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRoutesInput,
    ListRoutesOutput,
    Blob
  >();

  constructor(readonly input: ListRoutesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRoutesInput, ListRoutesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRoutesInput, ListRoutesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
