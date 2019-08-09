import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateSubnetCidrBlock } from "../model/AssociateSubnetCidrBlock";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateSubnetCidrBlockInput } from "../types/AssociateSubnetCidrBlockInput";
import { AssociateSubnetCidrBlockOutput } from "../types/AssociateSubnetCidrBlockOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AssociateSubnetCidrBlockInput";
export * from "../types/AssociateSubnetCidrBlockOutput";
export * from "../types/AssociateSubnetCidrBlockExceptionsUnion";

export class AssociateSubnetCidrBlockCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateSubnetCidrBlockInput,
      OutputTypesUnion,
      AssociateSubnetCidrBlockOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateSubnetCidrBlock;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateSubnetCidrBlockInput,
    AssociateSubnetCidrBlockOutput,
    Blob
  >();

  constructor(readonly input: AssociateSubnetCidrBlockInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateSubnetCidrBlockInput,
    AssociateSubnetCidrBlockOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateSubnetCidrBlockInput, AssociateSubnetCidrBlockOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
