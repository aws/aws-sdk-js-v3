import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { FailoverDBCluster } from "../model/FailoverDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { FailoverDBClusterInput } from "../types/FailoverDBClusterInput";
import { FailoverDBClusterOutput } from "../types/FailoverDBClusterOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/FailoverDBClusterInput";
export * from "../types/FailoverDBClusterOutput";
export * from "../types/FailoverDBClusterExceptionsUnion";

export class FailoverDBClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      FailoverDBClusterInput,
      OutputTypesUnion,
      FailoverDBClusterOutput,
      DocDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = FailoverDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    FailoverDBClusterInput,
    FailoverDBClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: FailoverDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<FailoverDBClusterInput, FailoverDBClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<FailoverDBClusterInput, FailoverDBClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
