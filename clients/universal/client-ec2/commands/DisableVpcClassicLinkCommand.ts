import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisableVpcClassicLink } from "../model/DisableVpcClassicLink";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableVpcClassicLinkInput } from "../types/DisableVpcClassicLinkInput";
import { DisableVpcClassicLinkOutput } from "../types/DisableVpcClassicLinkOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DisableVpcClassicLinkInput";
export * from "../types/DisableVpcClassicLinkOutput";
export * from "../types/DisableVpcClassicLinkExceptionsUnion";

export class DisableVpcClassicLinkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableVpcClassicLinkInput,
      OutputTypesUnion,
      DisableVpcClassicLinkOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DisableVpcClassicLink;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableVpcClassicLinkInput,
    DisableVpcClassicLinkOutput,
    Uint8Array
  >();

  constructor(readonly input: DisableVpcClassicLinkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableVpcClassicLinkInput,
    DisableVpcClassicLinkOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableVpcClassicLinkInput, DisableVpcClassicLinkOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
