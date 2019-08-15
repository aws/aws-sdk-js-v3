import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateVirtualRouter } from "../model/operations/CreateVirtualRouter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVirtualRouterInput } from "../types/CreateVirtualRouterInput";
import { CreateVirtualRouterOutput } from "../types/CreateVirtualRouterOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/CreateVirtualRouterInput";
export * from "../types/CreateVirtualRouterOutput";
export * from "../types/CreateVirtualRouterExceptionsUnion";

export class CreateVirtualRouterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVirtualRouterInput,
      OutputTypesUnion,
      CreateVirtualRouterOutput,
      AppMeshResolvedConfiguration,
      Blob
    > {
  readonly model = CreateVirtualRouter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVirtualRouterInput,
    CreateVirtualRouterOutput,
    Blob
  >();

  constructor(readonly input: CreateVirtualRouterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateVirtualRouterInput,
    CreateVirtualRouterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVirtualRouterInput, CreateVirtualRouterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
