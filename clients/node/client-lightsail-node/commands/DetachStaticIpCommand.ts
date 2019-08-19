import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetachStaticIp } from "../model/operations/DetachStaticIp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachStaticIpInput } from "../types/DetachStaticIpInput";
import { DetachStaticIpOutput } from "../types/DetachStaticIpOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/DetachStaticIpInput";
export * from "../types/DetachStaticIpOutput";
export * from "../types/DetachStaticIpExceptionsUnion";

export class DetachStaticIpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachStaticIpInput,
      OutputTypesUnion,
      DetachStaticIpOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetachStaticIp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachStaticIpInput,
    DetachStaticIpOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetachStaticIpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<DetachStaticIpInput, DetachStaticIpOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachStaticIpInput, DetachStaticIpOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
