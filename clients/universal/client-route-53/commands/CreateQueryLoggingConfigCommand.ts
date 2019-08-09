import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateQueryLoggingConfig } from "../model/CreateQueryLoggingConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateQueryLoggingConfigInput } from "../types/CreateQueryLoggingConfigInput";
import { CreateQueryLoggingConfigOutput } from "../types/CreateQueryLoggingConfigOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/CreateQueryLoggingConfigInput";
export * from "../types/CreateQueryLoggingConfigOutput";
export * from "../types/CreateQueryLoggingConfigExceptionsUnion";

export class CreateQueryLoggingConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateQueryLoggingConfigInput,
      OutputTypesUnion,
      CreateQueryLoggingConfigOutput,
      Route53ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateQueryLoggingConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateQueryLoggingConfigInput,
    CreateQueryLoggingConfigOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateQueryLoggingConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateQueryLoggingConfigInput,
    CreateQueryLoggingConfigOutput
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
      handler<CreateQueryLoggingConfigInput, CreateQueryLoggingConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
