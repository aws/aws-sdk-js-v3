import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDomainName } from "../model/DeleteDomainName";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDomainNameInput } from "../types/DeleteDomainNameInput";
import { DeleteDomainNameOutput } from "../types/DeleteDomainNameOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/DeleteDomainNameInput";
export * from "../types/DeleteDomainNameOutput";
export * from "../types/DeleteDomainNameExceptionsUnion";

export class DeleteDomainNameCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDomainNameInput,
      OutputTypesUnion,
      DeleteDomainNameOutput,
      ApiGatewayV2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDomainName;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDomainNameInput,
    DeleteDomainNameOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDomainNameInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDomainNameInput, DeleteDomainNameOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDomainNameInput, DeleteDomainNameOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
