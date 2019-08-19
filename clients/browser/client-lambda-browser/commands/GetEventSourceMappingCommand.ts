import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetEventSourceMapping } from "../model/operations/GetEventSourceMapping";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEventSourceMappingInput } from "../types/GetEventSourceMappingInput";
import { GetEventSourceMappingOutput } from "../types/GetEventSourceMappingOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/GetEventSourceMappingInput";
export * from "../types/GetEventSourceMappingOutput";
export * from "../types/GetEventSourceMappingExceptionsUnion";

export class GetEventSourceMappingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEventSourceMappingInput,
      OutputTypesUnion,
      GetEventSourceMappingOutput,
      LambdaResolvedConfiguration,
      Blob
    > {
  readonly model = GetEventSourceMapping;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEventSourceMappingInput,
    GetEventSourceMappingOutput,
    Blob
  >();

  constructor(readonly input: GetEventSourceMappingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetEventSourceMappingInput,
    GetEventSourceMappingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEventSourceMappingInput, GetEventSourceMappingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
