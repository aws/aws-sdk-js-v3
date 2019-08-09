import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListWebACLs } from "../model/ListWebACLs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListWebACLsInput } from "../types/ListWebACLsInput";
import { ListWebACLsOutput } from "../types/ListWebACLsOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/ListWebACLsInput";
export * from "../types/ListWebACLsOutput";
export * from "../types/ListWebACLsExceptionsUnion";

export class ListWebACLsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListWebACLsInput,
      OutputTypesUnion,
      ListWebACLsOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = ListWebACLs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListWebACLsInput,
    ListWebACLsOutput,
    Blob
  >();

  constructor(readonly input: ListWebACLsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<ListWebACLsInput, ListWebACLsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListWebACLsInput, ListWebACLsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
