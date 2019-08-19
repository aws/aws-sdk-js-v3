import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateVpcCidrBlock } from "../model/operations/DisassociateVpcCidrBlock";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateVpcCidrBlockInput } from "../types/DisassociateVpcCidrBlockInput";
import { DisassociateVpcCidrBlockOutput } from "../types/DisassociateVpcCidrBlockOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DisassociateVpcCidrBlockInput";
export * from "../types/DisassociateVpcCidrBlockOutput";
export * from "../types/DisassociateVpcCidrBlockExceptionsUnion";

export class DisassociateVpcCidrBlockCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateVpcCidrBlockInput,
      OutputTypesUnion,
      DisassociateVpcCidrBlockOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateVpcCidrBlock;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateVpcCidrBlockInput,
    DisassociateVpcCidrBlockOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateVpcCidrBlockInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateVpcCidrBlockInput,
    DisassociateVpcCidrBlockOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateVpcCidrBlockInput, DisassociateVpcCidrBlockOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
