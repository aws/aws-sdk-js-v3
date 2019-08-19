import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { IsVpcPeered } from "../model/operations/IsVpcPeered";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { IsVpcPeeredInput } from "../types/IsVpcPeeredInput";
import { IsVpcPeeredOutput } from "../types/IsVpcPeeredOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/IsVpcPeeredInput";
export * from "../types/IsVpcPeeredOutput";
export * from "../types/IsVpcPeeredExceptionsUnion";

export class IsVpcPeeredCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      IsVpcPeeredInput,
      OutputTypesUnion,
      IsVpcPeeredOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = IsVpcPeered;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    IsVpcPeeredInput,
    IsVpcPeeredOutput,
    Blob
  >();

  constructor(readonly input: IsVpcPeeredInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<IsVpcPeeredInput, IsVpcPeeredOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<IsVpcPeeredInput, IsVpcPeeredOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
