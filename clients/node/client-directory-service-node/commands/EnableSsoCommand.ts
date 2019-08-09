import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableSso } from "../model/EnableSso";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableSsoInput } from "../types/EnableSsoInput";
import { EnableSsoOutput } from "../types/EnableSsoOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/EnableSsoInput";
export * from "../types/EnableSsoOutput";
export * from "../types/EnableSsoExceptionsUnion";

export class EnableSsoCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableSsoInput,
      OutputTypesUnion,
      EnableSsoOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableSso;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableSsoInput,
    EnableSsoOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableSsoInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<EnableSsoInput, EnableSsoOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableSsoInput, EnableSsoOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
