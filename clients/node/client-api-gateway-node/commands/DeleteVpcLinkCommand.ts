import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteVpcLink } from "../model/operations/DeleteVpcLink";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVpcLinkInput } from "../types/DeleteVpcLinkInput";
import { DeleteVpcLinkOutput } from "../types/DeleteVpcLinkOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteVpcLinkInput";
export * from "../types/DeleteVpcLinkOutput";
export * from "../types/DeleteVpcLinkExceptionsUnion";

export class DeleteVpcLinkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVpcLinkInput,
      OutputTypesUnion,
      DeleteVpcLinkOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteVpcLink;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVpcLinkInput,
    DeleteVpcLinkOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteVpcLinkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteVpcLinkInput, DeleteVpcLinkOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVpcLinkInput, DeleteVpcLinkOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
