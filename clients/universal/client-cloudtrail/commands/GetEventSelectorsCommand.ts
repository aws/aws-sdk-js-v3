import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetEventSelectors } from "../model/GetEventSelectors";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEventSelectorsInput } from "../types/GetEventSelectorsInput";
import { GetEventSelectorsOutput } from "../types/GetEventSelectorsOutput";
import { CloudTrailResolvedConfiguration } from "../CloudTrailConfiguration";
export * from "../types/GetEventSelectorsInput";
export * from "../types/GetEventSelectorsOutput";
export * from "../types/GetEventSelectorsExceptionsUnion";

export class GetEventSelectorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEventSelectorsInput,
      OutputTypesUnion,
      GetEventSelectorsOutput,
      CloudTrailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetEventSelectors;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEventSelectorsInput,
    GetEventSelectorsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetEventSelectorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudTrailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetEventSelectorsInput, GetEventSelectorsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEventSelectorsInput, GetEventSelectorsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
