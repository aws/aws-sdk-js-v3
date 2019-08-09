import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateContainerAgent } from "../model/UpdateContainerAgent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateContainerAgentInput } from "../types/UpdateContainerAgentInput";
import { UpdateContainerAgentOutput } from "../types/UpdateContainerAgentOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/UpdateContainerAgentInput";
export * from "../types/UpdateContainerAgentOutput";
export * from "../types/UpdateContainerAgentExceptionsUnion";

export class UpdateContainerAgentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateContainerAgentInput,
      OutputTypesUnion,
      UpdateContainerAgentOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateContainerAgent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateContainerAgentInput,
    UpdateContainerAgentOutput,
    Blob
  >();

  constructor(readonly input: UpdateContainerAgentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateContainerAgentInput,
    UpdateContainerAgentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateContainerAgentInput, UpdateContainerAgentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
