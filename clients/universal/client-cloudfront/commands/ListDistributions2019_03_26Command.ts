import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDistributions2019_03_26 } from "../model/ListDistributions2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDistributions2019_03_26Input } from "../types/ListDistributions2019_03_26Input";
import { ListDistributions2019_03_26Output } from "../types/ListDistributions2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/ListDistributions2019_03_26Input";
export * from "../types/ListDistributions2019_03_26Output";
export * from "../types/ListDistributions2019_03_26ExceptionsUnion";

export class ListDistributions2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDistributions2019_03_26Input,
      OutputTypesUnion,
      ListDistributions2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListDistributions2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDistributions2019_03_26Input,
    ListDistributions2019_03_26Output,
    Uint8Array
  >();

  constructor(readonly input: ListDistributions2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDistributions2019_03_26Input,
    ListDistributions2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListDistributions2019_03_26Input,
        ListDistributions2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
