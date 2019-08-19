import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteService } from "../model/operations/DeleteService";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteServiceInput } from "../types/DeleteServiceInput";
import { DeleteServiceOutput } from "../types/DeleteServiceOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/DeleteServiceInput";
export * from "../types/DeleteServiceOutput";
export * from "../types/DeleteServiceExceptionsUnion";

export class DeleteServiceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteServiceInput,
      OutputTypesUnion,
      DeleteServiceOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteService;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteServiceInput,
    DeleteServiceOutput,
    Blob
  >();

  constructor(readonly input: DeleteServiceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteServiceInput, DeleteServiceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteServiceInput, DeleteServiceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
