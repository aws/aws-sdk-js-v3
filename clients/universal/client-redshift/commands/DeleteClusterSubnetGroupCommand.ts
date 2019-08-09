import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteClusterSubnetGroup } from "../model/DeleteClusterSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteClusterSubnetGroupInput } from "../types/DeleteClusterSubnetGroupInput";
import { DeleteClusterSubnetGroupOutput } from "../types/DeleteClusterSubnetGroupOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DeleteClusterSubnetGroupInput";
export * from "../types/DeleteClusterSubnetGroupOutput";
export * from "../types/DeleteClusterSubnetGroupExceptionsUnion";

export class DeleteClusterSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteClusterSubnetGroupInput,
      OutputTypesUnion,
      DeleteClusterSubnetGroupOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteClusterSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteClusterSubnetGroupInput,
    DeleteClusterSubnetGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteClusterSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteClusterSubnetGroupInput,
    DeleteClusterSubnetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteClusterSubnetGroupInput, DeleteClusterSubnetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
