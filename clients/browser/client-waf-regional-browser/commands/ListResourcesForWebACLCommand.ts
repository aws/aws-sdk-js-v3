import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListResourcesForWebACL } from "../model/operations/ListResourcesForWebACL";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResourcesForWebACLInput } from "../types/ListResourcesForWebACLInput";
import { ListResourcesForWebACLOutput } from "../types/ListResourcesForWebACLOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/ListResourcesForWebACLInput";
export * from "../types/ListResourcesForWebACLOutput";
export * from "../types/ListResourcesForWebACLExceptionsUnion";

export class ListResourcesForWebACLCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResourcesForWebACLInput,
      OutputTypesUnion,
      ListResourcesForWebACLOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = ListResourcesForWebACL;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResourcesForWebACLInput,
    ListResourcesForWebACLOutput,
    Blob
  >();

  constructor(readonly input: ListResourcesForWebACLInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListResourcesForWebACLInput,
    ListResourcesForWebACLOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListResourcesForWebACLInput, ListResourcesForWebACLOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
