import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateLayer } from "../model/operations/UpdateLayer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateLayerInput } from "../types/UpdateLayerInput";
import { UpdateLayerOutput } from "../types/UpdateLayerOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/UpdateLayerInput";
export * from "../types/UpdateLayerOutput";
export * from "../types/UpdateLayerExceptionsUnion";

export class UpdateLayerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateLayerInput,
      OutputTypesUnion,
      UpdateLayerOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateLayer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateLayerInput,
    UpdateLayerOutput,
    Blob
  >();

  constructor(readonly input: UpdateLayerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateLayerInput, UpdateLayerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateLayerInput, UpdateLayerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
