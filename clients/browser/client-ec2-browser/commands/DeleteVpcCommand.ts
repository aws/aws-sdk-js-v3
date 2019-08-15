import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVpc } from "../model/operations/DeleteVpc";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVpcInput } from "../types/DeleteVpcInput";
import { DeleteVpcOutput } from "../types/DeleteVpcOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteVpcInput";
export * from "../types/DeleteVpcOutput";
export * from "../types/DeleteVpcExceptionsUnion";

export class DeleteVpcCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVpcInput,
      OutputTypesUnion,
      DeleteVpcOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteVpc;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVpcInput,
    DeleteVpcOutput,
    Blob
  >();

  constructor(readonly input: DeleteVpcInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteVpcInput, DeleteVpcOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVpcInput, DeleteVpcOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
