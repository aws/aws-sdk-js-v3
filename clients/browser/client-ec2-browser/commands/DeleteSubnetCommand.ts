import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSubnet } from "../model/operations/DeleteSubnet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSubnetInput } from "../types/DeleteSubnetInput";
import { DeleteSubnetOutput } from "../types/DeleteSubnetOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteSubnetInput";
export * from "../types/DeleteSubnetOutput";
export * from "../types/DeleteSubnetExceptionsUnion";

export class DeleteSubnetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSubnetInput,
      OutputTypesUnion,
      DeleteSubnetOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSubnet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSubnetInput,
    DeleteSubnetOutput,
    Blob
  >();

  constructor(readonly input: DeleteSubnetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteSubnetInput, DeleteSubnetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSubnetInput, DeleteSubnetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
