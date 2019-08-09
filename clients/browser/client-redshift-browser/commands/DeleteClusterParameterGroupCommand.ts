import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteClusterParameterGroup } from "../model/DeleteClusterParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteClusterParameterGroupInput } from "../types/DeleteClusterParameterGroupInput";
import { DeleteClusterParameterGroupOutput } from "../types/DeleteClusterParameterGroupOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DeleteClusterParameterGroupInput";
export * from "../types/DeleteClusterParameterGroupOutput";
export * from "../types/DeleteClusterParameterGroupExceptionsUnion";

export class DeleteClusterParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteClusterParameterGroupInput,
      OutputTypesUnion,
      DeleteClusterParameterGroupOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteClusterParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteClusterParameterGroupInput,
    DeleteClusterParameterGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteClusterParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteClusterParameterGroupInput,
    DeleteClusterParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteClusterParameterGroupInput,
        DeleteClusterParameterGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
