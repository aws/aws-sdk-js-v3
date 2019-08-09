import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDestination } from "../model/UpdateDestination";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDestinationInput } from "../types/UpdateDestinationInput";
import { UpdateDestinationOutput } from "../types/UpdateDestinationOutput";
import { FirehoseResolvedConfiguration } from "../FirehoseConfiguration";
export * from "../types/UpdateDestinationInput";
export * from "../types/UpdateDestinationOutput";
export * from "../types/UpdateDestinationExceptionsUnion";

export class UpdateDestinationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDestinationInput,
      OutputTypesUnion,
      UpdateDestinationOutput,
      FirehoseResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateDestination;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDestinationInput,
    UpdateDestinationOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateDestinationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: FirehoseResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDestinationInput, UpdateDestinationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDestinationInput, UpdateDestinationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
