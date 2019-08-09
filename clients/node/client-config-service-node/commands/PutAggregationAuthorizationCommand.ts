import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutAggregationAuthorization } from "../model/PutAggregationAuthorization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutAggregationAuthorizationInput } from "../types/PutAggregationAuthorizationInput";
import { PutAggregationAuthorizationOutput } from "../types/PutAggregationAuthorizationOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/PutAggregationAuthorizationInput";
export * from "../types/PutAggregationAuthorizationOutput";
export * from "../types/PutAggregationAuthorizationExceptionsUnion";

export class PutAggregationAuthorizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutAggregationAuthorizationInput,
      OutputTypesUnion,
      PutAggregationAuthorizationOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutAggregationAuthorization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutAggregationAuthorizationInput,
    PutAggregationAuthorizationOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutAggregationAuthorizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutAggregationAuthorizationInput,
    PutAggregationAuthorizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutAggregationAuthorizationInput,
        PutAggregationAuthorizationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
