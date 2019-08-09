import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BacktrackDBCluster } from "../model/BacktrackDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BacktrackDBClusterInput } from "../types/BacktrackDBClusterInput";
import { BacktrackDBClusterOutput } from "../types/BacktrackDBClusterOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/BacktrackDBClusterInput";
export * from "../types/BacktrackDBClusterOutput";
export * from "../types/BacktrackDBClusterExceptionsUnion";

export class BacktrackDBClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BacktrackDBClusterInput,
      OutputTypesUnion,
      BacktrackDBClusterOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BacktrackDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BacktrackDBClusterInput,
    BacktrackDBClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: BacktrackDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BacktrackDBClusterInput,
    BacktrackDBClusterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BacktrackDBClusterInput, BacktrackDBClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
