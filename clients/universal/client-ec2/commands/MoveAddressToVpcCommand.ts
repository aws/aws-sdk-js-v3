import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { MoveAddressToVpc } from "../model/MoveAddressToVpc";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { MoveAddressToVpcInput } from "../types/MoveAddressToVpcInput";
import { MoveAddressToVpcOutput } from "../types/MoveAddressToVpcOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/MoveAddressToVpcInput";
export * from "../types/MoveAddressToVpcOutput";
export * from "../types/MoveAddressToVpcExceptionsUnion";

export class MoveAddressToVpcCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      MoveAddressToVpcInput,
      OutputTypesUnion,
      MoveAddressToVpcOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = MoveAddressToVpc;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    MoveAddressToVpcInput,
    MoveAddressToVpcOutput,
    Uint8Array
  >();

  constructor(readonly input: MoveAddressToVpcInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<MoveAddressToVpcInput, MoveAddressToVpcOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<MoveAddressToVpcInput, MoveAddressToVpcOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
