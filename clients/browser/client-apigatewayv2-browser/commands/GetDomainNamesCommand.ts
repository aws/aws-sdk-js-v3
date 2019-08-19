import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDomainNames } from "../model/operations/GetDomainNames";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDomainNamesInput } from "../types/GetDomainNamesInput";
import { GetDomainNamesOutput } from "../types/GetDomainNamesOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetDomainNamesInput";
export * from "../types/GetDomainNamesOutput";
export * from "../types/GetDomainNamesExceptionsUnion";

export class GetDomainNamesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDomainNamesInput,
      OutputTypesUnion,
      GetDomainNamesOutput,
      ApiGatewayV2ResolvedConfiguration,
      Blob
    > {
  readonly model = GetDomainNames;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDomainNamesInput,
    GetDomainNamesOutput,
    Blob
  >();

  constructor(readonly input: GetDomainNamesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDomainNamesInput, GetDomainNamesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDomainNamesInput, GetDomainNamesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
