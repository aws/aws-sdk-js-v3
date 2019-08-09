import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateNode } from "../model/AssociateNode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateNodeInput } from "../types/AssociateNodeInput";
import { AssociateNodeOutput } from "../types/AssociateNodeOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/AssociateNodeInput";
export * from "../types/AssociateNodeOutput";
export * from "../types/AssociateNodeExceptionsUnion";

export class AssociateNodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateNodeInput,
      OutputTypesUnion,
      AssociateNodeOutput,
      OpsWorksCMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssociateNode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateNodeInput,
    AssociateNodeOutput,
    Uint8Array
  >();

  constructor(readonly input: AssociateNodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<AssociateNodeInput, AssociateNodeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateNodeInput, AssociateNodeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
