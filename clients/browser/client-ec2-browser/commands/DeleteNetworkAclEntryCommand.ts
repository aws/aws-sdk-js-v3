import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteNetworkAclEntry } from "../model/operations/DeleteNetworkAclEntry";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNetworkAclEntryInput } from "../types/DeleteNetworkAclEntryInput";
import { DeleteNetworkAclEntryOutput } from "../types/DeleteNetworkAclEntryOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteNetworkAclEntryInput";
export * from "../types/DeleteNetworkAclEntryOutput";
export * from "../types/DeleteNetworkAclEntryExceptionsUnion";

export class DeleteNetworkAclEntryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNetworkAclEntryInput,
      OutputTypesUnion,
      DeleteNetworkAclEntryOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteNetworkAclEntry;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNetworkAclEntryInput,
    DeleteNetworkAclEntryOutput,
    Blob
  >();

  constructor(readonly input: DeleteNetworkAclEntryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteNetworkAclEntryInput,
    DeleteNetworkAclEntryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteNetworkAclEntryInput, DeleteNetworkAclEntryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
