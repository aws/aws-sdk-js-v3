import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateBudgetWithResource } from "../model/operations/AssociateBudgetWithResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateBudgetWithResourceInput } from "../types/AssociateBudgetWithResourceInput";
import { AssociateBudgetWithResourceOutput } from "../types/AssociateBudgetWithResourceOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/AssociateBudgetWithResourceInput";
export * from "../types/AssociateBudgetWithResourceOutput";
export * from "../types/AssociateBudgetWithResourceExceptionsUnion";

export class AssociateBudgetWithResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateBudgetWithResourceInput,
      OutputTypesUnion,
      AssociateBudgetWithResourceOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateBudgetWithResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateBudgetWithResourceInput,
    AssociateBudgetWithResourceOutput,
    Blob
  >();

  constructor(readonly input: AssociateBudgetWithResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateBudgetWithResourceInput,
    AssociateBudgetWithResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateBudgetWithResourceInput,
        AssociateBudgetWithResourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
