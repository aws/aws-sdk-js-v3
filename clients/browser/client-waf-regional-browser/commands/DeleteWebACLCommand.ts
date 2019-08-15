import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteWebACL } from "../model/operations/DeleteWebACL";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteWebACLInput } from "../types/DeleteWebACLInput";
import { DeleteWebACLOutput } from "../types/DeleteWebACLOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/DeleteWebACLInput";
export * from "../types/DeleteWebACLOutput";
export * from "../types/DeleteWebACLExceptionsUnion";

export class DeleteWebACLCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteWebACLInput,
      OutputTypesUnion,
      DeleteWebACLOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteWebACL;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteWebACLInput,
    DeleteWebACLOutput,
    Blob
  >();

  constructor(readonly input: DeleteWebACLInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteWebACLInput, DeleteWebACLOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteWebACLInput, DeleteWebACLOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
