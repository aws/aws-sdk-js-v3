import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateVirtualService } from "../model/operations/UpdateVirtualService";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateVirtualServiceInput } from "../types/UpdateVirtualServiceInput";
import { UpdateVirtualServiceOutput } from "../types/UpdateVirtualServiceOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/UpdateVirtualServiceInput";
export * from "../types/UpdateVirtualServiceOutput";
export * from "../types/UpdateVirtualServiceExceptionsUnion";

export class UpdateVirtualServiceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateVirtualServiceInput,
      OutputTypesUnion,
      UpdateVirtualServiceOutput,
      AppMeshResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateVirtualService;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateVirtualServiceInput,
    UpdateVirtualServiceOutput,
    Blob
  >();

  constructor(readonly input: UpdateVirtualServiceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateVirtualServiceInput,
    UpdateVirtualServiceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateVirtualServiceInput, UpdateVirtualServiceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
