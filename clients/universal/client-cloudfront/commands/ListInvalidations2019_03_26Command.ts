import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListInvalidations2019_03_26 } from "../model/ListInvalidations2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListInvalidations2019_03_26Input } from "../types/ListInvalidations2019_03_26Input";
import { ListInvalidations2019_03_26Output } from "../types/ListInvalidations2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/ListInvalidations2019_03_26Input";
export * from "../types/ListInvalidations2019_03_26Output";
export * from "../types/ListInvalidations2019_03_26ExceptionsUnion";

export class ListInvalidations2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListInvalidations2019_03_26Input,
      OutputTypesUnion,
      ListInvalidations2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListInvalidations2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListInvalidations2019_03_26Input,
    ListInvalidations2019_03_26Output,
    Uint8Array
  >();

  constructor(readonly input: ListInvalidations2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListInvalidations2019_03_26Input,
    ListInvalidations2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListInvalidations2019_03_26Input,
        ListInvalidations2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
