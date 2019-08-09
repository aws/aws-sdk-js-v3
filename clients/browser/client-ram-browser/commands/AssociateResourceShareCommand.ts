import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateResourceShare } from "../model/AssociateResourceShare";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateResourceShareInput } from "../types/AssociateResourceShareInput";
import { AssociateResourceShareOutput } from "../types/AssociateResourceShareOutput";
import { RAMResolvedConfiguration } from "../RAMConfiguration";
export * from "../types/AssociateResourceShareInput";
export * from "../types/AssociateResourceShareOutput";
export * from "../types/AssociateResourceShareExceptionsUnion";

export class AssociateResourceShareCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateResourceShareInput,
      OutputTypesUnion,
      AssociateResourceShareOutput,
      RAMResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateResourceShare;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateResourceShareInput,
    AssociateResourceShareOutput,
    Blob
  >();

  constructor(readonly input: AssociateResourceShareInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateResourceShareInput,
    AssociateResourceShareOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateResourceShareInput, AssociateResourceShareOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
