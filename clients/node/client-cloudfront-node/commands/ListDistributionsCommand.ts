import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDistributions } from "../model/operations/ListDistributions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDistributionsInput } from "../types/ListDistributionsInput";
import { ListDistributionsOutput } from "../types/ListDistributionsOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/ListDistributionsInput";
export * from "../types/ListDistributionsOutput";
export * from "../types/ListDistributionsExceptionsUnion";

export class ListDistributionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDistributionsInput,
      OutputTypesUnion,
      ListDistributionsOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDistributions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDistributionsInput,
    ListDistributionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDistributionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDistributionsInput, ListDistributionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDistributionsInput, ListDistributionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
