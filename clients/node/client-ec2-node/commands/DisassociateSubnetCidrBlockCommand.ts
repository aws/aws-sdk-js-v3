import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateSubnetCidrBlock } from "../model/DisassociateSubnetCidrBlock";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateSubnetCidrBlockInput } from "../types/DisassociateSubnetCidrBlockInput";
import { DisassociateSubnetCidrBlockOutput } from "../types/DisassociateSubnetCidrBlockOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DisassociateSubnetCidrBlockInput";
export * from "../types/DisassociateSubnetCidrBlockOutput";
export * from "../types/DisassociateSubnetCidrBlockExceptionsUnion";

export class DisassociateSubnetCidrBlockCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateSubnetCidrBlockInput,
      OutputTypesUnion,
      DisassociateSubnetCidrBlockOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateSubnetCidrBlock;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateSubnetCidrBlockInput,
    DisassociateSubnetCidrBlockOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateSubnetCidrBlockInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateSubnetCidrBlockInput,
    DisassociateSubnetCidrBlockOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateSubnetCidrBlockInput,
        DisassociateSubnetCidrBlockOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
