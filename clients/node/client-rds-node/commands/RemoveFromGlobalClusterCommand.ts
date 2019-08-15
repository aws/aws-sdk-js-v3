import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveFromGlobalCluster } from "../model/operations/RemoveFromGlobalCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveFromGlobalClusterInput } from "../types/RemoveFromGlobalClusterInput";
import { RemoveFromGlobalClusterOutput } from "../types/RemoveFromGlobalClusterOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/RemoveFromGlobalClusterInput";
export * from "../types/RemoveFromGlobalClusterOutput";
export * from "../types/RemoveFromGlobalClusterExceptionsUnion";

export class RemoveFromGlobalClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveFromGlobalClusterInput,
      OutputTypesUnion,
      RemoveFromGlobalClusterOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveFromGlobalCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveFromGlobalClusterInput,
    RemoveFromGlobalClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveFromGlobalClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveFromGlobalClusterInput,
    RemoveFromGlobalClusterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveFromGlobalClusterInput, RemoveFromGlobalClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
