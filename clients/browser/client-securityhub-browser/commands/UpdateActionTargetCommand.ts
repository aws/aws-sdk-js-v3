import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateActionTarget } from "../model/operations/UpdateActionTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateActionTargetInput } from "../types/UpdateActionTargetInput";
import { UpdateActionTargetOutput } from "../types/UpdateActionTargetOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/UpdateActionTargetInput";
export * from "../types/UpdateActionTargetOutput";
export * from "../types/UpdateActionTargetExceptionsUnion";

export class UpdateActionTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateActionTargetInput,
      OutputTypesUnion,
      UpdateActionTargetOutput,
      SecurityHubResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateActionTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateActionTargetInput,
    UpdateActionTargetOutput,
    Blob
  >();

  constructor(readonly input: UpdateActionTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateActionTargetInput,
    UpdateActionTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateActionTargetInput, UpdateActionTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
