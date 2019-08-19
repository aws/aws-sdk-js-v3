import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableVpcClassicLink } from "../model/operations/EnableVpcClassicLink";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableVpcClassicLinkInput } from "../types/EnableVpcClassicLinkInput";
import { EnableVpcClassicLinkOutput } from "../types/EnableVpcClassicLinkOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/EnableVpcClassicLinkInput";
export * from "../types/EnableVpcClassicLinkOutput";
export * from "../types/EnableVpcClassicLinkExceptionsUnion";

export class EnableVpcClassicLinkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableVpcClassicLinkInput,
      OutputTypesUnion,
      EnableVpcClassicLinkOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableVpcClassicLink;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableVpcClassicLinkInput,
    EnableVpcClassicLinkOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableVpcClassicLinkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableVpcClassicLinkInput,
    EnableVpcClassicLinkOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableVpcClassicLinkInput, EnableVpcClassicLinkOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
