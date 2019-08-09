import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBuiltinIntent } from "../model/GetBuiltinIntent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBuiltinIntentInput } from "../types/GetBuiltinIntentInput";
import { GetBuiltinIntentOutput } from "../types/GetBuiltinIntentOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetBuiltinIntentInput";
export * from "../types/GetBuiltinIntentOutput";
export * from "../types/GetBuiltinIntentExceptionsUnion";

export class GetBuiltinIntentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBuiltinIntentInput,
      OutputTypesUnion,
      GetBuiltinIntentOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = GetBuiltinIntent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBuiltinIntentInput,
    GetBuiltinIntentOutput,
    Blob
  >();

  constructor(readonly input: GetBuiltinIntentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBuiltinIntentInput, GetBuiltinIntentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBuiltinIntentInput, GetBuiltinIntentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
