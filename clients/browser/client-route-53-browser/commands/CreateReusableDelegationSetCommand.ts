import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateReusableDelegationSet } from "../model/CreateReusableDelegationSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateReusableDelegationSetInput } from "../types/CreateReusableDelegationSetInput";
import { CreateReusableDelegationSetOutput } from "../types/CreateReusableDelegationSetOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/CreateReusableDelegationSetInput";
export * from "../types/CreateReusableDelegationSetOutput";
export * from "../types/CreateReusableDelegationSetExceptionsUnion";

export class CreateReusableDelegationSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateReusableDelegationSetInput,
      OutputTypesUnion,
      CreateReusableDelegationSetOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateReusableDelegationSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateReusableDelegationSetInput,
    CreateReusableDelegationSetOutput,
    Blob
  >();

  constructor(readonly input: CreateReusableDelegationSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateReusableDelegationSetInput,
    CreateReusableDelegationSetOutput
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
      handler<
        CreateReusableDelegationSetInput,
        CreateReusableDelegationSetOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
