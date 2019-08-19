import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetInstancePortStates } from "../model/operations/GetInstancePortStates";
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
      _stream.Readable
    > {
  readonly model = GetInstancePortStates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInstancePortStatesInput,
    GetInstancePortStatesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetInstancePortStatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
