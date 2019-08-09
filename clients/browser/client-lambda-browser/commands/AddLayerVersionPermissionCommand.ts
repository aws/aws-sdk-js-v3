import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddLayerVersionPermission } from "../model/AddLayerVersionPermission";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddLayerVersionPermissionInput } from "../types/AddLayerVersionPermissionInput";
import { AddLayerVersionPermissionOutput } from "../types/AddLayerVersionPermissionOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/AddLayerVersionPermissionInput";
export * from "../types/AddLayerVersionPermissionOutput";
export * from "../types/AddLayerVersionPermissionExceptionsUnion";

export class AddLayerVersionPermissionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddLayerVersionPermissionInput,
      OutputTypesUnion,
      AddLayerVersionPermissionOutput,
      LambdaResolvedConfiguration,
      Blob
    > {
  readonly model = AddLayerVersionPermission;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddLayerVersionPermissionInput,
    AddLayerVersionPermissionOutput,
    Blob
  >();

  constructor(readonly input: AddLayerVersionPermissionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddLayerVersionPermissionInput,
    AddLayerVersionPermissionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddLayerVersionPermissionInput, AddLayerVersionPermissionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
