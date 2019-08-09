import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListConfigs } from "../model/ListConfigs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListConfigsInput } from "../types/ListConfigsInput";
import { ListConfigsOutput } from "../types/ListConfigsOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/ListConfigsInput";
export * from "../types/ListConfigsOutput";
export * from "../types/ListConfigsExceptionsUnion";

export class ListConfigsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListConfigsInput,
      OutputTypesUnion,
      ListConfigsOutput,
      GroundStationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListConfigs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListConfigsInput,
    ListConfigsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListConfigsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<ListConfigsInput, ListConfigsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListConfigsInput, ListConfigsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
