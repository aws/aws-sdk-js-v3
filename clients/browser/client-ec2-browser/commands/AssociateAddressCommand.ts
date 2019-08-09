import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateAddress } from "../model/AssociateAddress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateAddressInput } from "../types/AssociateAddressInput";
import { AssociateAddressOutput } from "../types/AssociateAddressOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AssociateAddressInput";
export * from "../types/AssociateAddressOutput";
export * from "../types/AssociateAddressExceptionsUnion";

export class AssociateAddressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateAddressInput,
      OutputTypesUnion,
      AssociateAddressOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateAddress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateAddressInput,
    AssociateAddressOutput,
    Blob
  >();

  constructor(readonly input: AssociateAddressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<AssociateAddressInput, AssociateAddressOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateAddressInput, AssociateAddressOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
