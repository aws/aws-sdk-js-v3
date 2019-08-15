import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ReplaceNetworkAclAssociation } from "../model/operations/ReplaceNetworkAclAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReplaceNetworkAclAssociationInput } from "../types/ReplaceNetworkAclAssociationInput";
import { ReplaceNetworkAclAssociationOutput } from "../types/ReplaceNetworkAclAssociationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ReplaceNetworkAclAssociationInput";
export * from "../types/ReplaceNetworkAclAssociationOutput";
export * from "../types/ReplaceNetworkAclAssociationExceptionsUnion";

export class ReplaceNetworkAclAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReplaceNetworkAclAssociationInput,
      OutputTypesUnion,
      ReplaceNetworkAclAssociationOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ReplaceNetworkAclAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReplaceNetworkAclAssociationInput,
    ReplaceNetworkAclAssociationOutput,
    Blob
  >();

  constructor(readonly input: ReplaceNetworkAclAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ReplaceNetworkAclAssociationInput,
    ReplaceNetworkAclAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ReplaceNetworkAclAssociationInput,
        ReplaceNetworkAclAssociationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
