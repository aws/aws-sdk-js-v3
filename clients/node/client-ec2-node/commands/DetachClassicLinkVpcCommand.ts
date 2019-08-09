import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetachClassicLinkVpc } from "../model/DetachClassicLinkVpc";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachClassicLinkVpcInput } from "../types/DetachClassicLinkVpcInput";
import { DetachClassicLinkVpcOutput } from "../types/DetachClassicLinkVpcOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DetachClassicLinkVpcInput";
export * from "../types/DetachClassicLinkVpcOutput";
export * from "../types/DetachClassicLinkVpcExceptionsUnion";

export class DetachClassicLinkVpcCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachClassicLinkVpcInput,
      OutputTypesUnion,
      DetachClassicLinkVpcOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetachClassicLinkVpc;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachClassicLinkVpcInput,
    DetachClassicLinkVpcOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetachClassicLinkVpcInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetachClassicLinkVpcInput,
    DetachClassicLinkVpcOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachClassicLinkVpcInput, DetachClassicLinkVpcOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
