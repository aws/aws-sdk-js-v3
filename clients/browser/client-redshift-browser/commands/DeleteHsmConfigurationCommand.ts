import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteHsmConfiguration } from "../model/DeleteHsmConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteHsmConfigurationInput } from "../types/DeleteHsmConfigurationInput";
import { DeleteHsmConfigurationOutput } from "../types/DeleteHsmConfigurationOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DeleteHsmConfigurationInput";
export * from "../types/DeleteHsmConfigurationOutput";
export * from "../types/DeleteHsmConfigurationExceptionsUnion";

export class DeleteHsmConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteHsmConfigurationInput,
      OutputTypesUnion,
      DeleteHsmConfigurationOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteHsmConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteHsmConfigurationInput,
    DeleteHsmConfigurationOutput,
    Blob
  >();

  constructor(readonly input: DeleteHsmConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteHsmConfigurationInput,
    DeleteHsmConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteHsmConfigurationInput, DeleteHsmConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
