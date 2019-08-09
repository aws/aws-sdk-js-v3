import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListActiveViolations } from "../model/ListActiveViolations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListActiveViolationsInput } from "../types/ListActiveViolationsInput";
import { ListActiveViolationsOutput } from "../types/ListActiveViolationsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListActiveViolationsInput";
export * from "../types/ListActiveViolationsOutput";
export * from "../types/ListActiveViolationsExceptionsUnion";

export class ListActiveViolationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListActiveViolationsInput,
      OutputTypesUnion,
      ListActiveViolationsOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListActiveViolations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListActiveViolationsInput,
    ListActiveViolationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListActiveViolationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListActiveViolationsInput,
    ListActiveViolationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListActiveViolationsInput, ListActiveViolationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
