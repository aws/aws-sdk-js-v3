import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAllowedNodeTypeModifications } from "../model/ListAllowedNodeTypeModifications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAllowedNodeTypeModificationsInput } from "../types/ListAllowedNodeTypeModificationsInput";
import { ListAllowedNodeTypeModificationsOutput } from "../types/ListAllowedNodeTypeModificationsOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/ListAllowedNodeTypeModificationsInput";
export * from "../types/ListAllowedNodeTypeModificationsOutput";
export * from "../types/ListAllowedNodeTypeModificationsExceptionsUnion";

export class ListAllowedNodeTypeModificationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAllowedNodeTypeModificationsInput,
      OutputTypesUnion,
      ListAllowedNodeTypeModificationsOutput,
      ElastiCacheResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListAllowedNodeTypeModifications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAllowedNodeTypeModificationsInput,
    ListAllowedNodeTypeModificationsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListAllowedNodeTypeModificationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAllowedNodeTypeModificationsInput,
    ListAllowedNodeTypeModificationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListAllowedNodeTypeModificationsInput,
        ListAllowedNodeTypeModificationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
