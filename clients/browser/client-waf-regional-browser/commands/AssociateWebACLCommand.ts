import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateWebACL } from "../model/operations/AssociateWebACL";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateWebACLInput } from "../types/AssociateWebACLInput";
import { AssociateWebACLOutput } from "../types/AssociateWebACLOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/AssociateWebACLInput";
export * from "../types/AssociateWebACLOutput";
export * from "../types/AssociateWebACLExceptionsUnion";

export class AssociateWebACLCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateWebACLInput,
      OutputTypesUnion,
      AssociateWebACLOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateWebACL;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateWebACLInput,
    AssociateWebACLOutput,
    Blob
  >();

  constructor(readonly input: AssociateWebACLInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<AssociateWebACLInput, AssociateWebACLOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateWebACLInput, AssociateWebACLOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
