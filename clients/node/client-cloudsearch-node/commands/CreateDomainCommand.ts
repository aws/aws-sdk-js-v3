import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDomain } from "../model/CreateDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDomainInput } from "../types/CreateDomainInput";
import { CreateDomainOutput } from "../types/CreateDomainOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/CreateDomainInput";
export * from "../types/CreateDomainOutput";
export * from "../types/CreateDomainExceptionsUnion";

export class CreateDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDomainInput,
      OutputTypesUnion,
      CreateDomainOutput,
      CloudSearchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDomainInput,
    CreateDomainOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDomainInput, CreateDomainOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDomainInput, CreateDomainOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
