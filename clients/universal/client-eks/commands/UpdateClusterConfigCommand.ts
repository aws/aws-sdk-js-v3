import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateClusterConfig } from "../model/UpdateClusterConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateClusterConfigInput } from "../types/UpdateClusterConfigInput";
import { UpdateClusterConfigOutput } from "../types/UpdateClusterConfigOutput";
import { EKSResolvedConfiguration } from "../EKSConfiguration";
export * from "../types/UpdateClusterConfigInput";
export * from "../types/UpdateClusterConfigOutput";
export * from "../types/UpdateClusterConfigExceptionsUnion";

export class UpdateClusterConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateClusterConfigInput,
      OutputTypesUnion,
      UpdateClusterConfigOutput,
      EKSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateClusterConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateClusterConfigInput,
    UpdateClusterConfigOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateClusterConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EKSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateClusterConfigInput,
    UpdateClusterConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateClusterConfigInput, UpdateClusterConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
