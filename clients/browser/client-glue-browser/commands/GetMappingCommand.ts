import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMapping } from "../model/operations/GetMapping";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMappingInput } from "../types/GetMappingInput";
import { GetMappingOutput } from "../types/GetMappingOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetMappingInput";
export * from "../types/GetMappingOutput";
export * from "../types/GetMappingExceptionsUnion";

export class GetMappingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMappingInput,
      OutputTypesUnion,
      GetMappingOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetMapping;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMappingInput,
    GetMappingOutput,
    Blob
  >();

  constructor(readonly input: GetMappingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMappingInput, GetMappingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMappingInput, GetMappingOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
