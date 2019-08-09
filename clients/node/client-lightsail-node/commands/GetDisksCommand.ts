import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDisks } from "../model/GetDisks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDisksInput } from "../types/GetDisksInput";
import { GetDisksOutput } from "../types/GetDisksOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetDisksInput";
export * from "../types/GetDisksOutput";
export * from "../types/GetDisksExceptionsUnion";

export class GetDisksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDisksInput,
      OutputTypesUnion,
      GetDisksOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDisks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDisksInput,
    GetDisksOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDisksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDisksInput, GetDisksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDisksInput, GetDisksOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
