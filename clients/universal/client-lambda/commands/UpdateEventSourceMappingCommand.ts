import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateEventSourceMapping } from "../model/UpdateEventSourceMapping";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateEventSourceMappingInput } from "../types/UpdateEventSourceMappingInput";
import { UpdateEventSourceMappingOutput } from "../types/UpdateEventSourceMappingOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/UpdateEventSourceMappingInput";
export * from "../types/UpdateEventSourceMappingOutput";
export * from "../types/UpdateEventSourceMappingExceptionsUnion";

export class UpdateEventSourceMappingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateEventSourceMappingInput,
      OutputTypesUnion,
      UpdateEventSourceMappingOutput,
      LambdaResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateEventSourceMapping;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateEventSourceMappingInput,
    UpdateEventSourceMappingOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateEventSourceMappingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateEventSourceMappingInput,
    UpdateEventSourceMappingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateEventSourceMappingInput, UpdateEventSourceMappingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
