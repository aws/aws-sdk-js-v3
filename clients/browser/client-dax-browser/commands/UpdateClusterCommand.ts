import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateCluster } from "../model/UpdateCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateClusterInput } from "../types/UpdateClusterInput";
import { UpdateClusterOutput } from "../types/UpdateClusterOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/UpdateClusterInput";
export * from "../types/UpdateClusterOutput";
export * from "../types/UpdateClusterExceptionsUnion";

export class UpdateClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateClusterInput,
      OutputTypesUnion,
      UpdateClusterOutput,
      DAXResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateClusterInput,
    UpdateClusterOutput,
    Blob
  >();

  constructor(readonly input: UpdateClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateClusterInput, UpdateClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateClusterInput, UpdateClusterOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
