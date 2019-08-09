import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteCluster } from "../model/DeleteCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteClusterInput } from "../types/DeleteClusterInput";
import { DeleteClusterOutput } from "../types/DeleteClusterOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DeleteClusterInput";
export * from "../types/DeleteClusterOutput";
export * from "../types/DeleteClusterExceptionsUnion";

export class DeleteClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteClusterInput,
      OutputTypesUnion,
      DeleteClusterOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteClusterInput,
    DeleteClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteClusterInput, DeleteClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteClusterInput, DeleteClusterOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
