import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UnpeerVpc } from "../model/UnpeerVpc";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UnpeerVpcInput } from "../types/UnpeerVpcInput";
import { UnpeerVpcOutput } from "../types/UnpeerVpcOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/UnpeerVpcInput";
export * from "../types/UnpeerVpcOutput";
export * from "../types/UnpeerVpcExceptionsUnion";

export class UnpeerVpcCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UnpeerVpcInput,
      OutputTypesUnion,
      UnpeerVpcOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = UnpeerVpc;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UnpeerVpcInput,
    UnpeerVpcOutput,
    Blob
  >();

  constructor(readonly input: UnpeerVpcInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<UnpeerVpcInput, UnpeerVpcOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UnpeerVpcInput, UnpeerVpcOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
