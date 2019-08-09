import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDistribution2019_03_26 } from "../model/DeleteDistribution2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDistribution2019_03_26Input } from "../types/DeleteDistribution2019_03_26Input";
import { DeleteDistribution2019_03_26Output } from "../types/DeleteDistribution2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/DeleteDistribution2019_03_26Input";
export * from "../types/DeleteDistribution2019_03_26Output";
export * from "../types/DeleteDistribution2019_03_26ExceptionsUnion";

export class DeleteDistribution2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDistribution2019_03_26Input,
      OutputTypesUnion,
      DeleteDistribution2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDistribution2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDistribution2019_03_26Input,
    DeleteDistribution2019_03_26Output,
    Blob
  >();

  constructor(readonly input: DeleteDistribution2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDistribution2019_03_26Input,
    DeleteDistribution2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteDistribution2019_03_26Input,
        DeleteDistribution2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
