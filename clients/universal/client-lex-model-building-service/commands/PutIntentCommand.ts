import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutIntent } from "../model/PutIntent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutIntentInput } from "../types/PutIntentInput";
import { PutIntentOutput } from "../types/PutIntentOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/PutIntentInput";
export * from "../types/PutIntentOutput";
export * from "../types/PutIntentExceptionsUnion";

export class PutIntentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutIntentInput,
      OutputTypesUnion,
      PutIntentOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutIntent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutIntentInput,
    PutIntentOutput,
    Uint8Array
  >();

  constructor(readonly input: PutIntentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<PutIntentInput, PutIntentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutIntentInput, PutIntentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
