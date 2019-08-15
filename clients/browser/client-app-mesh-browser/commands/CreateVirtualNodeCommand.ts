import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateVirtualNode } from "../model/operations/CreateVirtualNode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVirtualNodeInput } from "../types/CreateVirtualNodeInput";
import { CreateVirtualNodeOutput } from "../types/CreateVirtualNodeOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/CreateVirtualNodeInput";
export * from "../types/CreateVirtualNodeOutput";
export * from "../types/CreateVirtualNodeExceptionsUnion";

export class CreateVirtualNodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVirtualNodeInput,
      OutputTypesUnion,
      CreateVirtualNodeOutput,
      AppMeshResolvedConfiguration,
      Blob
    > {
  readonly model = CreateVirtualNode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVirtualNodeInput,
    CreateVirtualNodeOutput,
    Blob
  >();

  constructor(readonly input: CreateVirtualNodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateVirtualNodeInput, CreateVirtualNodeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVirtualNodeInput, CreateVirtualNodeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
