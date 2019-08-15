import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyCluster } from "../model/operations/ModifyCluster";
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
      Blob
    > {
  readonly model = ModifyCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyClusterInput,
    ModifyClusterOutput,
    Blob
  >();

  constructor(readonly input: ModifyClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
