import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListComplianceItems } from "../model/ListComplianceItems";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListComplianceItemsInput } from "../types/ListComplianceItemsInput";
import { ListComplianceItemsOutput } from "../types/ListComplianceItemsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ListComplianceItemsInput";
export * from "../types/ListComplianceItemsOutput";
export * from "../types/ListComplianceItemsExceptionsUnion";

export class ListComplianceItemsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListComplianceItemsInput,
      OutputTypesUnion,
      ListComplianceItemsOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListComplianceItems;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListComplianceItemsInput,
    ListComplianceItemsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListComplianceItemsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListComplianceItemsInput,
    ListComplianceItemsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListComplianceItemsInput, ListComplianceItemsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
