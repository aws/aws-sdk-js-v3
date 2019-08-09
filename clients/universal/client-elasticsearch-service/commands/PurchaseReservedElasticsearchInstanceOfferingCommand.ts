import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PurchaseReservedElasticsearchInstanceOffering } from "../model/PurchaseReservedElasticsearchInstanceOffering";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PurchaseReservedElasticsearchInstanceOfferingInput } from "../types/PurchaseReservedElasticsearchInstanceOfferingInput";
import { PurchaseReservedElasticsearchInstanceOfferingOutput } from "../types/PurchaseReservedElasticsearchInstanceOfferingOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/PurchaseReservedElasticsearchInstanceOfferingInput";
export * from "../types/PurchaseReservedElasticsearchInstanceOfferingOutput";
export * from "../types/PurchaseReservedElasticsearchInstanceOfferingExceptionsUnion";

export class PurchaseReservedElasticsearchInstanceOfferingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PurchaseReservedElasticsearchInstanceOfferingInput,
      OutputTypesUnion,
      PurchaseReservedElasticsearchInstanceOfferingOutput,
      ElasticsearchServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PurchaseReservedElasticsearchInstanceOffering;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PurchaseReservedElasticsearchInstanceOfferingInput,
    PurchaseReservedElasticsearchInstanceOfferingOutput,
    Uint8Array
  >();

  constructor(
    readonly input: PurchaseReservedElasticsearchInstanceOfferingInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PurchaseReservedElasticsearchInstanceOfferingInput,
    PurchaseReservedElasticsearchInstanceOfferingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PurchaseReservedElasticsearchInstanceOfferingInput,
        PurchaseReservedElasticsearchInstanceOfferingOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
