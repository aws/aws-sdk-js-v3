import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteQueryLoggingConfig } from "../model/DeleteQueryLoggingConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteQueryLoggingConfigInput } from "../types/DeleteQueryLoggingConfigInput";
import { DeleteQueryLoggingConfigOutput } from "../types/DeleteQueryLoggingConfigOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/DeleteQueryLoggingConfigInput";
export * from "../types/DeleteQueryLoggingConfigOutput";
export * from "../types/DeleteQueryLoggingConfigExceptionsUnion";

export class DeleteQueryLoggingConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteQueryLoggingConfigInput,
      OutputTypesUnion,
      DeleteQueryLoggingConfigOutput,
      Route53ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteQueryLoggingConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteQueryLoggingConfigInput,
    DeleteQueryLoggingConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteQueryLoggingConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteQueryLoggingConfigInput,
    DeleteQueryLoggingConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_route53_id_normalizer_middleware.idNormalizerMiddleware,
      {
        step: "initialize",
        priority: 0,
        tags: { NORMALIZE_ROUTE53_IDS: true }
      }
    );
    return stack.resolve(
      handler<DeleteQueryLoggingConfigInput, DeleteQueryLoggingConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
