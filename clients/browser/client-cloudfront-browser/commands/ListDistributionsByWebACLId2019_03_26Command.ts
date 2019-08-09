import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDistributionsByWebACLId2019_03_26 } from "../model/ListDistributionsByWebACLId2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDistributionsByWebACLId2019_03_26Input } from "../types/ListDistributionsByWebACLId2019_03_26Input";
import { ListDistributionsByWebACLId2019_03_26Output } from "../types/ListDistributionsByWebACLId2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/ListDistributionsByWebACLId2019_03_26Input";
export * from "../types/ListDistributionsByWebACLId2019_03_26Output";
export * from "../types/ListDistributionsByWebACLId2019_03_26ExceptionsUnion";

export class ListDistributionsByWebACLId2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDistributionsByWebACLId2019_03_26Input,
      OutputTypesUnion,
      ListDistributionsByWebACLId2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = ListDistributionsByWebACLId2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDistributionsByWebACLId2019_03_26Input,
    ListDistributionsByWebACLId2019_03_26Output,
    Blob
  >();

  constructor(readonly input: ListDistributionsByWebACLId2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDistributionsByWebACLId2019_03_26Input,
    ListDistributionsByWebACLId2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListDistributionsByWebACLId2019_03_26Input,
        ListDistributionsByWebACLId2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
