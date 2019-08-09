import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetUtterancesView } from "../model/GetUtterancesView";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUtterancesViewInput } from "../types/GetUtterancesViewInput";
import { GetUtterancesViewOutput } from "../types/GetUtterancesViewOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetUtterancesViewInput";
export * from "../types/GetUtterancesViewOutput";
export * from "../types/GetUtterancesViewExceptionsUnion";

export class GetUtterancesViewCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUtterancesViewInput,
      OutputTypesUnion,
      GetUtterancesViewOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetUtterancesView;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUtterancesViewInput,
    GetUtterancesViewOutput,
    Uint8Array
  >();

  constructor(readonly input: GetUtterancesViewInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUtterancesViewInput, GetUtterancesViewOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUtterancesViewInput, GetUtterancesViewOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
