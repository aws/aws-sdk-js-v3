import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateFlow } from "../model/operations/CreateFlow";
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
      Blob
    > {
  readonly model = CreateFlow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFlowInput,
    CreateFlowOutput,
    Blob
  >();

  constructor(readonly input: CreateFlowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
