import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetNode } from "../model/operations/GetNode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetNodeInput } from "../types/GetNodeInput";
import { GetNodeOutput } from "../types/GetNodeOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/GetNodeInput";
export * from "../types/GetNodeOutput";
export * from "../types/GetNodeExceptionsUnion";

export class GetNodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetNodeInput,
      OutputTypesUnion,
      GetNodeOutput,
      ManagedBlockchainResolvedConfiguration,
      Blob
    > {
  readonly model = GetNode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetNodeInput,
    GetNodeOutput,
    Blob
  >();

  constructor(readonly input: GetNodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<GetNodeInput, GetNodeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetNodeInput, GetNodeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
