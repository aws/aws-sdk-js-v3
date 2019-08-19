import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateNode } from "../model/operations/CreateNode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNodeInput } from "../types/CreateNodeInput";
import { CreateNodeOutput } from "../types/CreateNodeOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/CreateNodeInput";
export * from "../types/CreateNodeOutput";
export * from "../types/CreateNodeExceptionsUnion";

export class CreateNodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNodeInput,
      OutputTypesUnion,
      CreateNodeOutput,
      ManagedBlockchainResolvedConfiguration,
      Blob
    > {
  readonly model = CreateNode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNodeInput,
    CreateNodeOutput,
    Blob
  >();

  constructor(readonly input: CreateNodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateNodeInput, CreateNodeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateNodeInput, CreateNodeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
