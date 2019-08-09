import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDBClusterParameterGroup } from "../model/DeleteDBClusterParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDBClusterParameterGroupInput } from "../types/DeleteDBClusterParameterGroupInput";
import { DeleteDBClusterParameterGroupOutput } from "../types/DeleteDBClusterParameterGroupOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/DeleteDBClusterParameterGroupInput";
export * from "../types/DeleteDBClusterParameterGroupOutput";
export * from "../types/DeleteDBClusterParameterGroupExceptionsUnion";

export class DeleteDBClusterParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDBClusterParameterGroupInput,
      OutputTypesUnion,
      DeleteDBClusterParameterGroupOutput,
      DocDBResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDBClusterParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDBClusterParameterGroupInput,
    DeleteDBClusterParameterGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDBClusterParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDBClusterParameterGroupInput,
    DeleteDBClusterParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteDBClusterParameterGroupInput,
        DeleteDBClusterParameterGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
