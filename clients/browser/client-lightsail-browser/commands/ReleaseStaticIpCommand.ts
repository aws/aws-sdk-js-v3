import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ReleaseStaticIp } from "../model/operations/ReleaseStaticIp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReleaseStaticIpInput } from "../types/ReleaseStaticIpInput";
import { ReleaseStaticIpOutput } from "../types/ReleaseStaticIpOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/ReleaseStaticIpInput";
export * from "../types/ReleaseStaticIpOutput";
export * from "../types/ReleaseStaticIpExceptionsUnion";

export class ReleaseStaticIpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReleaseStaticIpInput,
      OutputTypesUnion,
      ReleaseStaticIpOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = ReleaseStaticIp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReleaseStaticIpInput,
    ReleaseStaticIpOutput,
    Blob
  >();

  constructor(readonly input: ReleaseStaticIpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<ReleaseStaticIpInput, ReleaseStaticIpOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReleaseStaticIpInput, ReleaseStaticIpOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
