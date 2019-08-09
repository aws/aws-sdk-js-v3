import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPublicKeys2019_03_26 } from "../model/ListPublicKeys2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPublicKeys2019_03_26Input } from "../types/ListPublicKeys2019_03_26Input";
import { ListPublicKeys2019_03_26Output } from "../types/ListPublicKeys2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/ListPublicKeys2019_03_26Input";
export * from "../types/ListPublicKeys2019_03_26Output";
export * from "../types/ListPublicKeys2019_03_26ExceptionsUnion";

export class ListPublicKeys2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPublicKeys2019_03_26Input,
      OutputTypesUnion,
      ListPublicKeys2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = ListPublicKeys2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPublicKeys2019_03_26Input,
    ListPublicKeys2019_03_26Output,
    Blob
  >();

  constructor(readonly input: ListPublicKeys2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPublicKeys2019_03_26Input,
    ListPublicKeys2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPublicKeys2019_03_26Input, ListPublicKeys2019_03_26Output>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
