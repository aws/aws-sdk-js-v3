import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDomainName } from "../model/UpdateDomainName";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDomainNameInput } from "../types/UpdateDomainNameInput";
import { UpdateDomainNameOutput } from "../types/UpdateDomainNameOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/UpdateDomainNameInput";
export * from "../types/UpdateDomainNameOutput";
export * from "../types/UpdateDomainNameExceptionsUnion";

export class UpdateDomainNameCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDomainNameInput,
      OutputTypesUnion,
      UpdateDomainNameOutput,
      ApiGatewayV2ResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDomainName;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDomainNameInput,
    UpdateDomainNameOutput,
    Blob
  >();

  constructor(readonly input: UpdateDomainNameInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDomainNameInput, UpdateDomainNameOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDomainNameInput, UpdateDomainNameOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
