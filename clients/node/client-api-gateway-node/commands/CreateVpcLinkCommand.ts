import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateVpcLink } from "../model/operations/CreateVpcLink";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVpcLinkInput } from "../types/CreateVpcLinkInput";
import { CreateVpcLinkOutput } from "../types/CreateVpcLinkOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/CreateVpcLinkInput";
export * from "../types/CreateVpcLinkOutput";
export * from "../types/CreateVpcLinkExceptionsUnion";

export class CreateVpcLinkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVpcLinkInput,
      OutputTypesUnion,
      CreateVpcLinkOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateVpcLink;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVpcLinkInput,
    CreateVpcLinkOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateVpcLinkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateVpcLinkInput, CreateVpcLinkOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVpcLinkInput, CreateVpcLinkOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
