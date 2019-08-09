import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAvailableZones } from "../model/ListAvailableZones";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAvailableZonesInput } from "../types/ListAvailableZonesInput";
import { ListAvailableZonesOutput } from "../types/ListAvailableZonesOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/ListAvailableZonesInput";
export * from "../types/ListAvailableZonesOutput";
export * from "../types/ListAvailableZonesExceptionsUnion";

export class ListAvailableZonesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAvailableZonesInput,
      OutputTypesUnion,
      ListAvailableZonesOutput,
      CloudHSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAvailableZones;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAvailableZonesInput,
    ListAvailableZonesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAvailableZonesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAvailableZonesInput,
    ListAvailableZonesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAvailableZonesInput, ListAvailableZonesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
