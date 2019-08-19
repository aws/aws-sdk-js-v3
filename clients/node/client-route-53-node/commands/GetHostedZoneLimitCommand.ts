import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetHostedZoneLimit } from "../model/operations/GetHostedZoneLimit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetHostedZoneLimitInput } from "../types/GetHostedZoneLimitInput";
import { GetHostedZoneLimitOutput } from "../types/GetHostedZoneLimitOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/GetHostedZoneLimitInput";
export * from "../types/GetHostedZoneLimitOutput";
export * from "../types/GetHostedZoneLimitExceptionsUnion";

export class GetHostedZoneLimitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetHostedZoneLimitInput,
      OutputTypesUnion,
      GetHostedZoneLimitOutput,
      Route53ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetHostedZoneLimit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetHostedZoneLimitInput,
    GetHostedZoneLimitOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetHostedZoneLimitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetHostedZoneLimitInput,
    GetHostedZoneLimitOutput
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
      handler<GetHostedZoneLimitInput, GetHostedZoneLimitOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
