import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteNetworkAcl } from "../model/DeleteNetworkAcl";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNetworkAclInput } from "../types/DeleteNetworkAclInput";
import { DeleteNetworkAclOutput } from "../types/DeleteNetworkAclOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteNetworkAclInput";
export * from "../types/DeleteNetworkAclOutput";
export * from "../types/DeleteNetworkAclExceptionsUnion";

export class DeleteNetworkAclCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNetworkAclInput,
      OutputTypesUnion,
      DeleteNetworkAclOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteNetworkAcl;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNetworkAclInput,
    DeleteNetworkAclOutput,
    Blob
  >();

  constructor(readonly input: DeleteNetworkAclInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteNetworkAclInput, DeleteNetworkAclOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteNetworkAclInput, DeleteNetworkAclOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
