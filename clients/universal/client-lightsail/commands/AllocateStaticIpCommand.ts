import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AllocateStaticIp } from "../model/AllocateStaticIp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AllocateStaticIpInput } from "../types/AllocateStaticIpInput";
import { AllocateStaticIpOutput } from "../types/AllocateStaticIpOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/AllocateStaticIpInput";
export * from "../types/AllocateStaticIpOutput";
export * from "../types/AllocateStaticIpExceptionsUnion";

export class AllocateStaticIpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AllocateStaticIpInput,
      OutputTypesUnion,
      AllocateStaticIpOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AllocateStaticIp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AllocateStaticIpInput,
    AllocateStaticIpOutput,
    Uint8Array
  >();

  constructor(readonly input: AllocateStaticIpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<AllocateStaticIpInput, AllocateStaticIpOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AllocateStaticIpInput, AllocateStaticIpOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
