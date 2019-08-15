import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetVpcLinks } from "../model/operations/GetVpcLinks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetVpcLinksInput } from "../types/GetVpcLinksInput";
import { GetVpcLinksOutput } from "../types/GetVpcLinksOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetVpcLinksInput";
export * from "../types/GetVpcLinksOutput";
export * from "../types/GetVpcLinksExceptionsUnion";

export class GetVpcLinksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetVpcLinksInput,
      OutputTypesUnion,
      GetVpcLinksOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = GetVpcLinks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetVpcLinksInput,
    GetVpcLinksOutput,
    Blob
  >();

  constructor(readonly input: GetVpcLinksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetVpcLinksInput, GetVpcLinksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetVpcLinksInput, GetVpcLinksOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
