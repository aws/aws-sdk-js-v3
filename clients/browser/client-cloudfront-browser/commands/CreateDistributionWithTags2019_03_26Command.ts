import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDistributionWithTags2019_03_26 } from "../model/CreateDistributionWithTags2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDistributionWithTags2019_03_26Input } from "../types/CreateDistributionWithTags2019_03_26Input";
import { CreateDistributionWithTags2019_03_26Output } from "../types/CreateDistributionWithTags2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreateDistributionWithTags2019_03_26Input";
export * from "../types/CreateDistributionWithTags2019_03_26Output";
export * from "../types/CreateDistributionWithTags2019_03_26ExceptionsUnion";

export class CreateDistributionWithTags2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDistributionWithTags2019_03_26Input,
      OutputTypesUnion,
      CreateDistributionWithTags2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDistributionWithTags2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDistributionWithTags2019_03_26Input,
    CreateDistributionWithTags2019_03_26Output,
    Blob
  >();

  constructor(readonly input: CreateDistributionWithTags2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDistributionWithTags2019_03_26Input,
    CreateDistributionWithTags2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateDistributionWithTags2019_03_26Input,
        CreateDistributionWithTags2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
