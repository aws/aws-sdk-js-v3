import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RemoveLayerVersionPermission } from "../model/RemoveLayerVersionPermission";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveLayerVersionPermissionInput } from "../types/RemoveLayerVersionPermissionInput";
import { RemoveLayerVersionPermissionOutput } from "../types/RemoveLayerVersionPermissionOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/RemoveLayerVersionPermissionInput";
export * from "../types/RemoveLayerVersionPermissionOutput";
export * from "../types/RemoveLayerVersionPermissionExceptionsUnion";

export class RemoveLayerVersionPermissionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveLayerVersionPermissionInput,
      OutputTypesUnion,
      RemoveLayerVersionPermissionOutput,
      LambdaResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RemoveLayerVersionPermission;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveLayerVersionPermissionInput,
    RemoveLayerVersionPermissionOutput,
    Uint8Array
  >();

  constructor(readonly input: RemoveLayerVersionPermissionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveLayerVersionPermissionInput,
    RemoveLayerVersionPermissionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RemoveLayerVersionPermissionInput,
        RemoveLayerVersionPermissionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
