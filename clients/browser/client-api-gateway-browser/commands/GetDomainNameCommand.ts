import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDomainName } from "../model/GetDomainName";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDomainNameInput } from "../types/GetDomainNameInput";
import { GetDomainNameOutput } from "../types/GetDomainNameOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetDomainNameInput";
export * from "../types/GetDomainNameOutput";
export * from "../types/GetDomainNameExceptionsUnion";

export class GetDomainNameCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDomainNameInput,
      OutputTypesUnion,
      GetDomainNameOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = GetDomainName;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDomainNameInput,
    GetDomainNameOutput,
    Blob
  >();

  constructor(readonly input: GetDomainNameInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDomainNameInput, GetDomainNameOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDomainNameInput, GetDomainNameOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
