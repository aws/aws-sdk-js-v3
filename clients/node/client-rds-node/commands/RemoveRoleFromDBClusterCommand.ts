import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveRoleFromDBCluster } from "../model/operations/RemoveRoleFromDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveRoleFromDBClusterInput } from "../types/RemoveRoleFromDBClusterInput";
import { RemoveRoleFromDBClusterOutput } from "../types/RemoveRoleFromDBClusterOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
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
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveRoleFromDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveRoleFromDBClusterInput,
    RemoveRoleFromDBClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveRoleFromDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
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
