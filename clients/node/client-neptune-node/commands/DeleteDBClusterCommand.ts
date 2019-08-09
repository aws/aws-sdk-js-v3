import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDBCluster } from "../model/DeleteDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDBClusterInput } from "../types/DeleteDBClusterInput";
import { DeleteDBClusterOutput } from "../types/DeleteDBClusterOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/DeleteDBClusterInput";
export * from "../types/DeleteDBClusterOutput";
export * from "../types/DeleteDBClusterExceptionsUnion";

export class DeleteDBClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDBClusterInput,
      OutputTypesUnion,
      DeleteDBClusterOutput,
      NeptuneResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDBClusterInput,
    DeleteDBClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDBClusterInput, DeleteDBClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDBClusterInput, DeleteDBClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
