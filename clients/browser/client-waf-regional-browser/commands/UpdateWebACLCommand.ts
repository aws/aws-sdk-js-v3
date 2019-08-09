import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateWebACL } from "../model/UpdateWebACL";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateWebACLInput } from "../types/UpdateWebACLInput";
import { UpdateWebACLOutput } from "../types/UpdateWebACLOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/UpdateWebACLInput";
export * from "../types/UpdateWebACLOutput";
export * from "../types/UpdateWebACLExceptionsUnion";

export class UpdateWebACLCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateWebACLInput,
      OutputTypesUnion,
      UpdateWebACLOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateWebACL;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateWebACLInput,
    UpdateWebACLOutput,
    Blob
  >();

  constructor(readonly input: UpdateWebACLInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateWebACLInput, UpdateWebACLOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateWebACLInput, UpdateWebACLOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
