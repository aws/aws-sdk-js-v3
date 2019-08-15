import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetVpcLink } from "../model/operations/GetVpcLink";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetVpcLinkInput } from "../types/GetVpcLinkInput";
import { GetVpcLinkOutput } from "../types/GetVpcLinkOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetVpcLinkInput";
export * from "../types/GetVpcLinkOutput";
export * from "../types/GetVpcLinkExceptionsUnion";

export class GetVpcLinkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetVpcLinkInput,
      OutputTypesUnion,
      GetVpcLinkOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetVpcLink;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetVpcLinkInput,
    GetVpcLinkOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetVpcLinkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetVpcLinkInput, GetVpcLinkOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetVpcLinkInput, GetVpcLinkOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
