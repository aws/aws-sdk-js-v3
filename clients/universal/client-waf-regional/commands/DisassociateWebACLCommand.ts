import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateWebACL } from "../model/DisassociateWebACL";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateWebACLInput } from "../types/DisassociateWebACLInput";
import { DisassociateWebACLOutput } from "../types/DisassociateWebACLOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/DisassociateWebACLInput";
export * from "../types/DisassociateWebACLOutput";
export * from "../types/DisassociateWebACLExceptionsUnion";

export class DisassociateWebACLCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateWebACLInput,
      OutputTypesUnion,
      DisassociateWebACLOutput,
      WAFRegionalResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DisassociateWebACL;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateWebACLInput,
    DisassociateWebACLOutput,
    Uint8Array
  >();

  constructor(readonly input: DisassociateWebACLInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateWebACLInput,
    DisassociateWebACLOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateWebACLInput, DisassociateWebACLOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
