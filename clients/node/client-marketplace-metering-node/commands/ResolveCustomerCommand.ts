import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResolveCustomer } from "../model/operations/ResolveCustomer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResolveCustomerInput } from "../types/ResolveCustomerInput";
import { ResolveCustomerOutput } from "../types/ResolveCustomerOutput";
import { MarketplaceMeteringResolvedConfiguration } from "../MarketplaceMeteringConfiguration";
export * from "../types/ResolveCustomerInput";
export * from "../types/ResolveCustomerOutput";
export * from "../types/ResolveCustomerExceptionsUnion";

export class ResolveCustomerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResolveCustomerInput,
      OutputTypesUnion,
      ResolveCustomerOutput,
      MarketplaceMeteringResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResolveCustomer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResolveCustomerInput,
    ResolveCustomerOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResolveCustomerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MarketplaceMeteringResolvedConfiguration
  ): __aws_sdk_types.Handler<ResolveCustomerInput, ResolveCustomerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResolveCustomerInput, ResolveCustomerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
