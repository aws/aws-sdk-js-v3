import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutDedicatedIpWarmupAttributes } from "../model/PutDedicatedIpWarmupAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutDedicatedIpWarmupAttributesInput } from "../types/PutDedicatedIpWarmupAttributesInput";
import { PutDedicatedIpWarmupAttributesOutput } from "../types/PutDedicatedIpWarmupAttributesOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/PutDedicatedIpWarmupAttributesInput";
export * from "../types/PutDedicatedIpWarmupAttributesOutput";
export * from "../types/PutDedicatedIpWarmupAttributesExceptionsUnion";

export class PutDedicatedIpWarmupAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutDedicatedIpWarmupAttributesInput,
      OutputTypesUnion,
      PutDedicatedIpWarmupAttributesOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutDedicatedIpWarmupAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutDedicatedIpWarmupAttributesInput,
    PutDedicatedIpWarmupAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutDedicatedIpWarmupAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutDedicatedIpWarmupAttributesInput,
    PutDedicatedIpWarmupAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutDedicatedIpWarmupAttributesInput,
        PutDedicatedIpWarmupAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
