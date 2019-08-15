import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutAccountDedicatedIpWarmupAttributes } from "../model/operations/PutAccountDedicatedIpWarmupAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutAccountDedicatedIpWarmupAttributesInput } from "../types/PutAccountDedicatedIpWarmupAttributesInput";
import { PutAccountDedicatedIpWarmupAttributesOutput } from "../types/PutAccountDedicatedIpWarmupAttributesOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/PutAccountDedicatedIpWarmupAttributesInput";
export * from "../types/PutAccountDedicatedIpWarmupAttributesOutput";
export * from "../types/PutAccountDedicatedIpWarmupAttributesExceptionsUnion";

export class PutAccountDedicatedIpWarmupAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutAccountDedicatedIpWarmupAttributesInput,
      OutputTypesUnion,
      PutAccountDedicatedIpWarmupAttributesOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutAccountDedicatedIpWarmupAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutAccountDedicatedIpWarmupAttributesInput,
    PutAccountDedicatedIpWarmupAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutAccountDedicatedIpWarmupAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutAccountDedicatedIpWarmupAttributesInput,
    PutAccountDedicatedIpWarmupAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutAccountDedicatedIpWarmupAttributesInput,
        PutAccountDedicatedIpWarmupAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
