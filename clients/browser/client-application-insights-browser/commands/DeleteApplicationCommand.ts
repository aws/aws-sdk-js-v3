import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteApplication } from "../model/operations/DeleteApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApplicationInput } from "../types/DeleteApplicationInput";
import { DeleteApplicationOutput } from "../types/DeleteApplicationOutput";
import { ApplicationInsightsResolvedConfiguration } from "../ApplicationInsightsConfiguration";
export * from "../types/DeleteApplicationInput";
export * from "../types/DeleteApplicationOutput";
export * from "../types/DeleteApplicationExceptionsUnion";

export class DeleteApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApplicationInput,
      OutputTypesUnion,
      DeleteApplicationOutput,
      ApplicationInsightsResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApplicationInput,
    DeleteApplicationOutput,
    Blob
  >();

  constructor(readonly input: DeleteApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApplicationInsightsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteApplicationInput, DeleteApplicationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteApplicationInput, DeleteApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
