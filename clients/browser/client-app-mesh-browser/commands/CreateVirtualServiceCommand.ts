import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateVirtualService } from "../model/CreateVirtualService";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVirtualServiceInput } from "../types/CreateVirtualServiceInput";
import { CreateVirtualServiceOutput } from "../types/CreateVirtualServiceOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/CreateVirtualServiceInput";
export * from "../types/CreateVirtualServiceOutput";
export * from "../types/CreateVirtualServiceExceptionsUnion";

export class CreateVirtualServiceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVirtualServiceInput,
      OutputTypesUnion,
      CreateVirtualServiceOutput,
      AppMeshResolvedConfiguration,
      Blob
    > {
  readonly model = CreateVirtualService;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVirtualServiceInput,
    CreateVirtualServiceOutput,
    Blob
  >();

  constructor(readonly input: CreateVirtualServiceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateVirtualServiceInput,
    CreateVirtualServiceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVirtualServiceInput, CreateVirtualServiceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
