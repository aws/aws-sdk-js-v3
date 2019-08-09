import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetIntent } from "../model/GetIntent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIntentInput } from "../types/GetIntentInput";
import { GetIntentOutput } from "../types/GetIntentOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetIntentInput";
export * from "../types/GetIntentOutput";
export * from "../types/GetIntentExceptionsUnion";

export class GetIntentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIntentInput,
      OutputTypesUnion,
      GetIntentOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetIntent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIntentInput,
    GetIntentOutput,
    Uint8Array
  >();

  constructor(readonly input: GetIntentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetIntentInput, GetIntentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetIntentInput, GetIntentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
