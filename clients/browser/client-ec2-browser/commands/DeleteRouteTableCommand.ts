import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRouteTable } from "../model/operations/DeleteRouteTable";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRouteTableInput } from "../types/DeleteRouteTableInput";
import { DeleteRouteTableOutput } from "../types/DeleteRouteTableOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteRouteTableInput";
export * from "../types/DeleteRouteTableOutput";
export * from "../types/DeleteRouteTableExceptionsUnion";

export class DeleteRouteTableCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRouteTableInput,
      OutputTypesUnion,
      DeleteRouteTableOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteRouteTable;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRouteTableInput,
    DeleteRouteTableOutput,
    Blob
  >();

  constructor(readonly input: DeleteRouteTableInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteRouteTableInput, DeleteRouteTableOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRouteTableInput, DeleteRouteTableOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
