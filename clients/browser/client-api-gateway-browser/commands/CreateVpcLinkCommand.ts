import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Blob
    > {
  readonly model = CreateVpcLink;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVpcLinkInput,
    CreateVpcLinkOutput,
    Blob
  >();

  constructor(readonly input: CreateVpcLinkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
