import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListIpRoutes } from "../model/ListIpRoutes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListIpRoutesInput } from "../types/ListIpRoutesInput";
import { ListIpRoutesOutput } from "../types/ListIpRoutesOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/ListIpRoutesInput";
export * from "../types/ListIpRoutesOutput";
export * from "../types/ListIpRoutesExceptionsUnion";

export class ListIpRoutesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListIpRoutesInput,
      OutputTypesUnion,
      ListIpRoutesOutput,
      DirectoryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = ListIpRoutes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListIpRoutesInput,
    ListIpRoutesOutput,
    Blob
  >();

  constructor(readonly input: ListIpRoutesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<ListIpRoutesInput, ListIpRoutesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListIpRoutesInput, ListIpRoutesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
