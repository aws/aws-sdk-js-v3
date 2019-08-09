import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateClusterVersion } from "../model/UpdateClusterVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateClusterVersionInput } from "../types/UpdateClusterVersionInput";
import { UpdateClusterVersionOutput } from "../types/UpdateClusterVersionOutput";
import { EKSResolvedConfiguration } from "../EKSConfiguration";
export * from "../types/UpdateClusterVersionInput";
export * from "../types/UpdateClusterVersionOutput";
export * from "../types/UpdateClusterVersionExceptionsUnion";

export class UpdateClusterVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateClusterVersionInput,
      OutputTypesUnion,
      UpdateClusterVersionOutput,
      EKSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateClusterVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateClusterVersionInput,
    UpdateClusterVersionOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateClusterVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EKSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateClusterVersionInput,
    UpdateClusterVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateClusterVersionInput, UpdateClusterVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
