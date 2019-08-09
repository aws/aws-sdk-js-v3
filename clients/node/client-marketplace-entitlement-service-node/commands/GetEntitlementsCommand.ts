import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetEntitlements } from "../model/GetEntitlements";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEntitlementsInput } from "../types/GetEntitlementsInput";
import { GetEntitlementsOutput } from "../types/GetEntitlementsOutput";
import { MarketplaceEntitlementServiceResolvedConfiguration } from "../MarketplaceEntitlementServiceConfiguration";
export * from "../types/GetEntitlementsInput";
export * from "../types/GetEntitlementsOutput";
export * from "../types/GetEntitlementsExceptionsUnion";

export class GetEntitlementsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEntitlementsInput,
      OutputTypesUnion,
      GetEntitlementsOutput,
      MarketplaceEntitlementServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetEntitlements;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEntitlementsInput,
    GetEntitlementsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetEntitlementsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MarketplaceEntitlementServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetEntitlementsInput, GetEntitlementsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEntitlementsInput, GetEntitlementsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
