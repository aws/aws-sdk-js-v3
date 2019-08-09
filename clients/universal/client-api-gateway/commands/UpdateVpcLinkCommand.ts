import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateVpcLink } from "../model/UpdateVpcLink";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateVpcLinkInput } from "../types/UpdateVpcLinkInput";
import { UpdateVpcLinkOutput } from "../types/UpdateVpcLinkOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateVpcLinkInput";
export * from "../types/UpdateVpcLinkOutput";
export * from "../types/UpdateVpcLinkExceptionsUnion";

export class UpdateVpcLinkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateVpcLinkInput,
      OutputTypesUnion,
      UpdateVpcLinkOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateVpcLink;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateVpcLinkInput,
    UpdateVpcLinkOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateVpcLinkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateVpcLinkInput, UpdateVpcLinkOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateVpcLinkInput, UpdateVpcLinkOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
