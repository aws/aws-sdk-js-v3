import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDomainName } from "../model/operations/GetDomainName";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDomainNameInput } from "../types/GetDomainNameInput";
import { GetDomainNameOutput } from "../types/GetDomainNameOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
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
      ApiGatewayV2ResolvedConfiguration,
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
    configuration: ApiGatewayV2ResolvedConfiguration
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
