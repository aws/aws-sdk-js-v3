import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyCluster } from "../model/ModifyCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyClusterInput } from "../types/ModifyClusterInput";
import { ModifyClusterOutput } from "../types/ModifyClusterOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/ModifyClusterInput";
export * from "../types/ModifyClusterOutput";
export * from "../types/ModifyClusterExceptionsUnion";

export class ModifyClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyClusterInput,
      OutputTypesUnion,
      ModifyClusterOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyClusterInput,
    ModifyClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyClusterInput, ModifyClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyClusterInput, ModifyClusterOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
