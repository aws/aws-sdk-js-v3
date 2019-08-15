import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RevokeDomainAccess } from "../model/operations/RevokeDomainAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RevokeDomainAccessInput } from "../types/RevokeDomainAccessInput";
import { RevokeDomainAccessOutput } from "../types/RevokeDomainAccessOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/RevokeDomainAccessInput";
export * from "../types/RevokeDomainAccessOutput";
export * from "../types/RevokeDomainAccessExceptionsUnion";

export class RevokeDomainAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RevokeDomainAccessInput,
      OutputTypesUnion,
      RevokeDomainAccessOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RevokeDomainAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RevokeDomainAccessInput,
    RevokeDomainAccessOutput,
    _stream.Readable
  >();

  constructor(readonly input: RevokeDomainAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RevokeDomainAccessInput,
    RevokeDomainAccessOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RevokeDomainAccessInput, RevokeDomainAccessOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
