import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CancelCluster } from "../model/operations/CancelCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelClusterInput } from "../types/CancelClusterInput";
import { CancelClusterOutput } from "../types/CancelClusterOutput";
import { SnowballResolvedConfiguration } from "../SnowballConfiguration";
export * from "../types/CancelClusterInput";
export * from "../types/CancelClusterOutput";
export * from "../types/CancelClusterExceptionsUnion";

export class CancelClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelClusterInput,
      OutputTypesUnion,
      CancelClusterOutput,
      SnowballResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CancelCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelClusterInput,
    CancelClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: CancelClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SnowballResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelClusterInput, CancelClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelClusterInput, CancelClusterOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
