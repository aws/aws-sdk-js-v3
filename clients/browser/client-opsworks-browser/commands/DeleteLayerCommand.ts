import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteLayer } from "../model/operations/DeleteLayer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLayerInput } from "../types/DeleteLayerInput";
import { DeleteLayerOutput } from "../types/DeleteLayerOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DeleteLayerInput";
export * from "../types/DeleteLayerOutput";
export * from "../types/DeleteLayerExceptionsUnion";

export class DeleteLayerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLayerInput,
      OutputTypesUnion,
      DeleteLayerOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteLayer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLayerInput,
    DeleteLayerOutput,
    Blob
  >();

  constructor(readonly input: DeleteLayerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteLayerInput, DeleteLayerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLayerInput, DeleteLayerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
