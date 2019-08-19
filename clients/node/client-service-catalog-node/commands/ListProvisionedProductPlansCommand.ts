import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListProvisionedProductPlans } from "../model/operations/ListProvisionedProductPlans";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListProvisionedProductPlansInput } from "../types/ListProvisionedProductPlansInput";
import { ListProvisionedProductPlansOutput } from "../types/ListProvisionedProductPlansOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListProvisionedProductPlansInput";
export * from "../types/ListProvisionedProductPlansOutput";
export * from "../types/ListProvisionedProductPlansExceptionsUnion";

export class ListProvisionedProductPlansCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListProvisionedProductPlansInput,
      OutputTypesUnion,
      ListProvisionedProductPlansOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListProvisionedProductPlans;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListProvisionedProductPlansInput,
    ListProvisionedProductPlansOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListProvisionedProductPlansInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListProvisionedProductPlansInput,
    ListProvisionedProductPlansOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListProvisionedProductPlansInput,
        ListProvisionedProductPlansOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
