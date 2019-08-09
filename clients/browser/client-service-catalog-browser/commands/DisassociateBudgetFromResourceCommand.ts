import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateBudgetFromResource } from "../model/DisassociateBudgetFromResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateBudgetFromResourceInput } from "../types/DisassociateBudgetFromResourceInput";
import { DisassociateBudgetFromResourceOutput } from "../types/DisassociateBudgetFromResourceOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DisassociateBudgetFromResourceInput";
export * from "../types/DisassociateBudgetFromResourceOutput";
export * from "../types/DisassociateBudgetFromResourceExceptionsUnion";

export class DisassociateBudgetFromResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateBudgetFromResourceInput,
      OutputTypesUnion,
      DisassociateBudgetFromResourceOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateBudgetFromResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateBudgetFromResourceInput,
    DisassociateBudgetFromResourceOutput,
    Blob
  >();

  constructor(readonly input: DisassociateBudgetFromResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateBudgetFromResourceInput,
    DisassociateBudgetFromResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateBudgetFromResourceInput,
        DisassociateBudgetFromResourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
