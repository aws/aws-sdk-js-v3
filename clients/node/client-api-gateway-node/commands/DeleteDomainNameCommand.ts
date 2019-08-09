import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDomainName } from "../model/DeleteDomainName";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDomainNameInput } from "../types/DeleteDomainNameInput";
import { DeleteDomainNameOutput } from "../types/DeleteDomainNameOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
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
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDomainName;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDomainNameInput,
    DeleteDomainNameOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDomainNameInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
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
