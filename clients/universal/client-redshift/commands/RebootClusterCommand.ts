import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RebootCluster } from "../model/RebootCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RebootClusterInput } from "../types/RebootClusterInput";
import { RebootClusterOutput } from "../types/RebootClusterOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/RebootClusterInput";
export * from "../types/RebootClusterOutput";
export * from "../types/RebootClusterExceptionsUnion";

export class RebootClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RebootClusterInput,
      OutputTypesUnion,
      RebootClusterOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RebootCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RebootClusterInput,
    RebootClusterOutput,
    Uint8Array
  >();

  constructor(readonly input: RebootClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<RebootClusterInput, RebootClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RebootClusterInput, RebootClusterOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
