import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RemoveRoleFromDBCluster } from "../model/RemoveRoleFromDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveRoleFromDBClusterInput } from "../types/RemoveRoleFromDBClusterInput";
import { RemoveRoleFromDBClusterOutput } from "../types/RemoveRoleFromDBClusterOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/RemoveRoleFromDBClusterInput";
export * from "../types/RemoveRoleFromDBClusterOutput";
export * from "../types/RemoveRoleFromDBClusterExceptionsUnion";

export class RemoveRoleFromDBClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveRoleFromDBClusterInput,
      OutputTypesUnion,
      RemoveRoleFromDBClusterOutput,
      NeptuneResolvedConfiguration,
      Blob
    > {
  readonly model = RemoveRoleFromDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveRoleFromDBClusterInput,
    RemoveRoleFromDBClusterOutput,
    Blob
  >();

  constructor(readonly input: RemoveRoleFromDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveRoleFromDBClusterInput,
    RemoveRoleFromDBClusterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveRoleFromDBClusterInput, RemoveRoleFromDBClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
