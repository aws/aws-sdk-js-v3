import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetTransitGatewayAttachmentPropagations } from "../model/GetTransitGatewayAttachmentPropagations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTransitGatewayAttachmentPropagationsInput } from "../types/GetTransitGatewayAttachmentPropagationsInput";
import { GetTransitGatewayAttachmentPropagationsOutput } from "../types/GetTransitGatewayAttachmentPropagationsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetTransitGatewayAttachmentPropagationsInput";
export * from "../types/GetTransitGatewayAttachmentPropagationsOutput";
export * from "../types/GetTransitGatewayAttachmentPropagationsExceptionsUnion";

export class GetTransitGatewayAttachmentPropagationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTransitGatewayAttachmentPropagationsInput,
      OutputTypesUnion,
      GetTransitGatewayAttachmentPropagationsOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetTransitGatewayAttachmentPropagations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTransitGatewayAttachmentPropagationsInput,
    GetTransitGatewayAttachmentPropagationsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetTransitGatewayAttachmentPropagationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetTransitGatewayAttachmentPropagationsInput,
    GetTransitGatewayAttachmentPropagationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetTransitGatewayAttachmentPropagationsInput,
        GetTransitGatewayAttachmentPropagationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
