import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachStaticIp } from "../model/AttachStaticIp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachStaticIpInput } from "../types/AttachStaticIpInput";
import { AttachStaticIpOutput } from "../types/AttachStaticIpOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/AttachStaticIpInput";
export * from "../types/AttachStaticIpOutput";
export * from "../types/AttachStaticIpExceptionsUnion";

export class AttachStaticIpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachStaticIpInput,
      OutputTypesUnion,
      AttachStaticIpOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AttachStaticIp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachStaticIpInput,
    AttachStaticIpOutput,
    Uint8Array
  >();

  constructor(readonly input: AttachStaticIpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<AttachStaticIpInput, AttachStaticIpOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachStaticIpInput, AttachStaticIpOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
