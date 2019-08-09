import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetInstanceState } from "../model/GetInstanceState";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInstanceStateInput } from "../types/GetInstanceStateInput";
import { GetInstanceStateOutput } from "../types/GetInstanceStateOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetInstanceStateInput";
export * from "../types/GetInstanceStateOutput";
export * from "../types/GetInstanceStateExceptionsUnion";

export class GetInstanceStateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInstanceStateInput,
      OutputTypesUnion,
      GetInstanceStateOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetInstanceState;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInstanceStateInput,
    GetInstanceStateOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetInstanceStateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetInstanceStateInput, GetInstanceStateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInstanceStateInput, GetInstanceStateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
