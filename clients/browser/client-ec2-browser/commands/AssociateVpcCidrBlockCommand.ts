import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateVpcCidrBlock } from "../model/AssociateVpcCidrBlock";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateVpcCidrBlockInput } from "../types/AssociateVpcCidrBlockInput";
import { AssociateVpcCidrBlockOutput } from "../types/AssociateVpcCidrBlockOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AssociateVpcCidrBlockInput";
export * from "../types/AssociateVpcCidrBlockOutput";
export * from "../types/AssociateVpcCidrBlockExceptionsUnion";

export class AssociateVpcCidrBlockCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateVpcCidrBlockInput,
      OutputTypesUnion,
      AssociateVpcCidrBlockOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateVpcCidrBlock;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateVpcCidrBlockInput,
    AssociateVpcCidrBlockOutput,
    Blob
  >();

  constructor(readonly input: AssociateVpcCidrBlockInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateVpcCidrBlockInput,
    AssociateVpcCidrBlockOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateVpcCidrBlockInput, AssociateVpcCidrBlockOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
