import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteAggregationAuthorization } from "../model/DeleteAggregationAuthorization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAggregationAuthorizationInput } from "../types/DeleteAggregationAuthorizationInput";
import { DeleteAggregationAuthorizationOutput } from "../types/DeleteAggregationAuthorizationOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DeleteAggregationAuthorizationInput";
export * from "../types/DeleteAggregationAuthorizationOutput";
export * from "../types/DeleteAggregationAuthorizationExceptionsUnion";

export class DeleteAggregationAuthorizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAggregationAuthorizationInput,
      OutputTypesUnion,
      DeleteAggregationAuthorizationOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteAggregationAuthorization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAggregationAuthorizationInput,
    DeleteAggregationAuthorizationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteAggregationAuthorizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteAggregationAuthorizationInput,
    DeleteAggregationAuthorizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteAggregationAuthorizationInput,
        DeleteAggregationAuthorizationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
