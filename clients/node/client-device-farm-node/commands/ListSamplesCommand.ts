import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSamples } from "../model/ListSamples";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSamplesInput } from "../types/ListSamplesInput";
import { ListSamplesOutput } from "../types/ListSamplesOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListSamplesInput";
export * from "../types/ListSamplesOutput";
export * from "../types/ListSamplesExceptionsUnion";

export class ListSamplesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSamplesInput,
      OutputTypesUnion,
      ListSamplesOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSamples;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSamplesInput,
    ListSamplesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSamplesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<ListSamplesInput, ListSamplesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSamplesInput, ListSamplesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
