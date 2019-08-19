import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetOperationsForResource } from "../model/operations/GetOperationsForResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetOperationsForResourceInput } from "../types/GetOperationsForResourceInput";
import { GetOperationsForResourceOutput } from "../types/GetOperationsForResourceOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetOperationsForResourceInput";
export * from "../types/GetOperationsForResourceOutput";
export * from "../types/GetOperationsForResourceExceptionsUnion";

export class GetOperationsForResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetOperationsForResourceInput,
      OutputTypesUnion,
      GetOperationsForResourceOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetOperationsForResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetOperationsForResourceInput,
    GetOperationsForResourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetOperationsForResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetOperationsForResourceInput,
    GetOperationsForResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetOperationsForResourceInput, GetOperationsForResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
