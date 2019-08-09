import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListStackSetOperations } from "../model/ListStackSetOperations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListStackSetOperationsInput } from "../types/ListStackSetOperationsInput";
import { ListStackSetOperationsOutput } from "../types/ListStackSetOperationsOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/ListStackSetOperationsInput";
export * from "../types/ListStackSetOperationsOutput";
export * from "../types/ListStackSetOperationsExceptionsUnion";

export class ListStackSetOperationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListStackSetOperationsInput,
      OutputTypesUnion,
      ListStackSetOperationsOutput,
      CloudFormationResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListStackSetOperations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStackSetOperationsInput,
    ListStackSetOperationsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListStackSetOperationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListStackSetOperationsInput,
    ListStackSetOperationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListStackSetOperationsInput, ListStackSetOperationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
