import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateTagOptionFromResource } from "../model/DisassociateTagOptionFromResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateTagOptionFromResourceInput } from "../types/DisassociateTagOptionFromResourceInput";
import { DisassociateTagOptionFromResourceOutput } from "../types/DisassociateTagOptionFromResourceOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DisassociateTagOptionFromResourceInput";
export * from "../types/DisassociateTagOptionFromResourceOutput";
export * from "../types/DisassociateTagOptionFromResourceExceptionsUnion";

export class DisassociateTagOptionFromResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateTagOptionFromResourceInput,
      OutputTypesUnion,
      DisassociateTagOptionFromResourceOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateTagOptionFromResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateTagOptionFromResourceInput,
    DisassociateTagOptionFromResourceOutput,
    Blob
  >();

  constructor(readonly input: DisassociateTagOptionFromResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateTagOptionFromResourceInput,
    DisassociateTagOptionFromResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateTagOptionFromResourceInput,
        DisassociateTagOptionFromResourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
