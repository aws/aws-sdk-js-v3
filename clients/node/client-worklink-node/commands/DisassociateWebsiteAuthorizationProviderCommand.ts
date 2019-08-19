import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateWebsiteAuthorizationProvider } from "../model/operations/DisassociateWebsiteAuthorizationProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateWebsiteAuthorizationProviderInput } from "../types/DisassociateWebsiteAuthorizationProviderInput";
import { DisassociateWebsiteAuthorizationProviderOutput } from "../types/DisassociateWebsiteAuthorizationProviderOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/DisassociateWebsiteAuthorizationProviderInput";
export * from "../types/DisassociateWebsiteAuthorizationProviderOutput";
export * from "../types/DisassociateWebsiteAuthorizationProviderExceptionsUnion";

export class DisassociateWebsiteAuthorizationProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateWebsiteAuthorizationProviderInput,
      OutputTypesUnion,
      DisassociateWebsiteAuthorizationProviderOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateWebsiteAuthorizationProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateWebsiteAuthorizationProviderInput,
    DisassociateWebsiteAuthorizationProviderOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateWebsiteAuthorizationProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateWebsiteAuthorizationProviderInput,
    DisassociateWebsiteAuthorizationProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateWebsiteAuthorizationProviderInput,
        DisassociateWebsiteAuthorizationProviderOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
