import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetInstancePortStates } from "../model/GetInstancePortStates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInstancePortStatesInput } from "../types/GetInstancePortStatesInput";
import { GetInstancePortStatesOutput } from "../types/GetInstancePortStatesOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetInstancePortStatesInput";
export * from "../types/GetInstancePortStatesOutput";
export * from "../types/GetInstancePortStatesExceptionsUnion";

export class GetInstancePortStatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInstancePortStatesInput,
      OutputTypesUnion,
      GetInstancePortStatesOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = GetInstancePortStates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInstancePortStatesInput,
    GetInstancePortStatesOutput,
    Blob
  >();

  constructor(readonly input: GetInstancePortStatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetInstancePortStatesInput,
    GetInstancePortStatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInstancePortStatesInput, GetInstancePortStatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
