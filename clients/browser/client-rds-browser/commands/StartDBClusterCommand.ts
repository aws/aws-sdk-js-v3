import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartDBCluster } from "../model/StartDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartDBClusterInput } from "../types/StartDBClusterInput";
import { StartDBClusterOutput } from "../types/StartDBClusterOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/StartDBClusterInput";
export * from "../types/StartDBClusterOutput";
export * from "../types/StartDBClusterExceptionsUnion";

export class StartDBClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartDBClusterInput,
      OutputTypesUnion,
      StartDBClusterOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = StartDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartDBClusterInput,
    StartDBClusterOutput,
    Blob
  >();

  constructor(readonly input: StartDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<StartDBClusterInput, StartDBClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartDBClusterInput, StartDBClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
