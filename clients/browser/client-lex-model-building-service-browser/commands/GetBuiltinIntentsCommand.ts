import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBuiltinIntents } from "../model/GetBuiltinIntents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBuiltinIntentsInput } from "../types/GetBuiltinIntentsInput";
import { GetBuiltinIntentsOutput } from "../types/GetBuiltinIntentsOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetBuiltinIntentsInput";
export * from "../types/GetBuiltinIntentsOutput";
export * from "../types/GetBuiltinIntentsExceptionsUnion";

export class GetBuiltinIntentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBuiltinIntentsInput,
      OutputTypesUnion,
      GetBuiltinIntentsOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = GetBuiltinIntents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBuiltinIntentsInput,
    GetBuiltinIntentsOutput,
    Blob
  >();

  constructor(readonly input: GetBuiltinIntentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBuiltinIntentsInput, GetBuiltinIntentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBuiltinIntentsInput, GetBuiltinIntentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
