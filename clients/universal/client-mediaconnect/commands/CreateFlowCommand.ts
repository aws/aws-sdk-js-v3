import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateFlow } from "../model/CreateFlow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFlowInput } from "../types/CreateFlowInput";
import { CreateFlowOutput } from "../types/CreateFlowOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/CreateFlowInput";
export * from "../types/CreateFlowOutput";
export * from "../types/CreateFlowExceptionsUnion";

export class CreateFlowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFlowInput,
      OutputTypesUnion,
      CreateFlowOutput,
      MediaConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateFlow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFlowInput,
    CreateFlowOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateFlowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateFlowInput, CreateFlowOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateFlowInput, CreateFlowOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
