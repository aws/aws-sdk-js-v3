import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateWebsiteAuthorizationProvider } from "../model/AssociateWebsiteAuthorizationProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateWebsiteAuthorizationProviderInput } from "../types/AssociateWebsiteAuthorizationProviderInput";
import { AssociateWebsiteAuthorizationProviderOutput } from "../types/AssociateWebsiteAuthorizationProviderOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/AssociateWebsiteAuthorizationProviderInput";
export * from "../types/AssociateWebsiteAuthorizationProviderOutput";
export * from "../types/AssociateWebsiteAuthorizationProviderExceptionsUnion";

export class AssociateWebsiteAuthorizationProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateWebsiteAuthorizationProviderInput,
      OutputTypesUnion,
      AssociateWebsiteAuthorizationProviderOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateWebsiteAuthorizationProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateWebsiteAuthorizationProviderInput,
    AssociateWebsiteAuthorizationProviderOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateWebsiteAuthorizationProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateWebsiteAuthorizationProviderInput,
    AssociateWebsiteAuthorizationProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateWebsiteAuthorizationProviderInput,
        AssociateWebsiteAuthorizationProviderOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
