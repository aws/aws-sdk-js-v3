import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { InitializeCluster } from "../model/InitializeCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { InitializeClusterInput } from "../types/InitializeClusterInput";
import { InitializeClusterOutput } from "../types/InitializeClusterOutput";
import { CloudHSMV2ResolvedConfiguration } from "../CloudHSMV2Configuration";
export * from "../types/InitializeClusterInput";
export * from "../types/InitializeClusterOutput";
export * from "../types/InitializeClusterExceptionsUnion";

export class InitializeClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      InitializeClusterInput,
      OutputTypesUnion,
      InitializeClusterOutput,
      CloudHSMV2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = InitializeCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InitializeClusterInput,
    InitializeClusterOutput,
    Uint8Array
  >();

  constructor(readonly input: InitializeClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudHSMV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<InitializeClusterInput, InitializeClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<InitializeClusterInput, InitializeClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
