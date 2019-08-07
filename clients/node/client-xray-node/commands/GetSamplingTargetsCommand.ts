import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSamplingTargets } from "../model/GetSamplingTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSamplingTargetsInput } from "../types/GetSamplingTargetsInput";
import { GetSamplingTargetsOutput } from "../types/GetSamplingTargetsOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/GetSamplingTargetsInput";
export * from "../types/GetSamplingTargetsOutput";
export * from "../types/GetSamplingTargetsExceptionsUnion";

export class GetSamplingTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSamplingTargetsInput,
      OutputTypesUnion,
      GetSamplingTargetsOutput,
      XRayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSamplingTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSamplingTargetsInput,
    GetSamplingTargetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSamplingTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSamplingTargetsInput,
    GetSamplingTargetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSamplingTargetsInput, GetSamplingTargetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
