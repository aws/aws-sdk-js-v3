import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { VerifyDomainDkim } from "../model/VerifyDomainDkim";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { VerifyDomainDkimInput } from "../types/VerifyDomainDkimInput";
import { VerifyDomainDkimOutput } from "../types/VerifyDomainDkimOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/VerifyDomainDkimInput";
export * from "../types/VerifyDomainDkimOutput";
export * from "../types/VerifyDomainDkimExceptionsUnion";

export class VerifyDomainDkimCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      VerifyDomainDkimInput,
      OutputTypesUnion,
      VerifyDomainDkimOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = VerifyDomainDkim;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    VerifyDomainDkimInput,
    VerifyDomainDkimOutput,
    _stream.Readable
  >();

  constructor(readonly input: VerifyDomainDkimInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<VerifyDomainDkimInput, VerifyDomainDkimOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<VerifyDomainDkimInput, VerifyDomainDkimOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
