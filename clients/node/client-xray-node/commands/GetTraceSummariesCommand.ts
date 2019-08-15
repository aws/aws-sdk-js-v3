import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTraceSummaries } from "../model/operations/GetTraceSummaries";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTraceSummariesInput } from "../types/GetTraceSummariesInput";
import { GetTraceSummariesOutput } from "../types/GetTraceSummariesOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/GetTraceSummariesInput";
export * from "../types/GetTraceSummariesOutput";
export * from "../types/GetTraceSummariesExceptionsUnion";

export class GetTraceSummariesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTraceSummariesInput,
      OutputTypesUnion,
      GetTraceSummariesOutput,
      XRayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTraceSummaries;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTraceSummariesInput,
    GetTraceSummariesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTraceSummariesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTraceSummariesInput, GetTraceSummariesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTraceSummariesInput, GetTraceSummariesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
