import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDomainName } from "../model/CreateDomainName";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDomainNameInput } from "../types/CreateDomainNameInput";
import { CreateDomainNameOutput } from "../types/CreateDomainNameOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/CreateDomainNameInput";
export * from "../types/CreateDomainNameOutput";
export * from "../types/CreateDomainNameExceptionsUnion";

export class CreateDomainNameCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDomainNameInput,
      OutputTypesUnion,
      CreateDomainNameOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDomainName;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDomainNameInput,
    CreateDomainNameOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDomainNameInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDomainNameInput, CreateDomainNameOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDomainNameInput, CreateDomainNameOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
