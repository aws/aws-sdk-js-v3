import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateBasePathMapping } from "../model/operations/UpdateBasePathMapping";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateBasePathMappingInput } from "../types/UpdateBasePathMappingInput";
import { UpdateBasePathMappingOutput } from "../types/UpdateBasePathMappingOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateBasePathMappingInput";
export * from "../types/UpdateBasePathMappingOutput";
export * from "../types/UpdateBasePathMappingExceptionsUnion";

export class UpdateBasePathMappingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateBasePathMappingInput,
      OutputTypesUnion,
      UpdateBasePathMappingOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateBasePathMapping;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateBasePathMappingInput,
    UpdateBasePathMappingOutput,
    Blob
  >();

  constructor(readonly input: UpdateBasePathMappingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateBasePathMappingInput,
    UpdateBasePathMappingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateBasePathMappingInput, UpdateBasePathMappingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
