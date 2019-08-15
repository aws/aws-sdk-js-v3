import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTrafficPolicyVersions } from "../model/operations/ListTrafficPolicyVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTrafficPolicyVersionsInput } from "../types/ListTrafficPolicyVersionsInput";
import { ListTrafficPolicyVersionsOutput } from "../types/ListTrafficPolicyVersionsOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/ListTrafficPolicyVersionsInput";
export * from "../types/ListTrafficPolicyVersionsOutput";
export * from "../types/ListTrafficPolicyVersionsExceptionsUnion";

export class ListTrafficPolicyVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTrafficPolicyVersionsInput,
      OutputTypesUnion,
      ListTrafficPolicyVersionsOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = ListTrafficPolicyVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTrafficPolicyVersionsInput,
    ListTrafficPolicyVersionsOutput,
    Blob
  >();

  constructor(readonly input: ListTrafficPolicyVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTrafficPolicyVersionsInput,
    ListTrafficPolicyVersionsOutput
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
      handler<ListTrafficPolicyVersionsInput, ListTrafficPolicyVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
