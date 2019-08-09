import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetHostedZone } from "../model/GetHostedZone";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetHostedZoneInput } from "../types/GetHostedZoneInput";
import { GetHostedZoneOutput } from "../types/GetHostedZoneOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/GetHostedZoneInput";
export * from "../types/GetHostedZoneOutput";
export * from "../types/GetHostedZoneExceptionsUnion";

export class GetHostedZoneCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetHostedZoneInput,
      OutputTypesUnion,
      GetHostedZoneOutput,
      Route53ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetHostedZone;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetHostedZoneInput,
    GetHostedZoneOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetHostedZoneInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetHostedZoneInput, GetHostedZoneOutput> {
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
      handler<GetHostedZoneInput, GetHostedZoneOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
