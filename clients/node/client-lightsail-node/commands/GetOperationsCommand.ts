import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetOperations } from "../model/GetOperations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetOperationsInput } from "../types/GetOperationsInput";
import { GetOperationsOutput } from "../types/GetOperationsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetOperationsInput";
export * from "../types/GetOperationsOutput";
export * from "../types/GetOperationsExceptionsUnion";

export class GetOperationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetOperationsInput,
      OutputTypesUnion,
      GetOperationsOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetOperations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetOperationsInput,
    GetOperationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetOperationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetOperationsInput, GetOperationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetOperationsInput, GetOperationsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
