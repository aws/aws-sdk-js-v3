import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetQueryLoggingConfig } from "../model/operations/GetQueryLoggingConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetQueryLoggingConfigInput } from "../types/GetQueryLoggingConfigInput";
import { GetQueryLoggingConfigOutput } from "../types/GetQueryLoggingConfigOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/GetQueryLoggingConfigInput";
export * from "../types/GetQueryLoggingConfigOutput";
export * from "../types/GetQueryLoggingConfigExceptionsUnion";

export class GetQueryLoggingConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetQueryLoggingConfigInput,
      OutputTypesUnion,
      GetQueryLoggingConfigOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = GetQueryLoggingConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetQueryLoggingConfigInput,
    GetQueryLoggingConfigOutput,
    Blob
  >();

  constructor(readonly input: GetQueryLoggingConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetQueryLoggingConfigInput,
    GetQueryLoggingConfigOutput
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
      handler<GetQueryLoggingConfigInput, GetQueryLoggingConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
