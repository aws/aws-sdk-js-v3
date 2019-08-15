import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListStreamingDistributions } from "../model/operations/ListStreamingDistributions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListStreamingDistributionsInput } from "../types/ListStreamingDistributionsInput";
import { ListStreamingDistributionsOutput } from "../types/ListStreamingDistributionsOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/ListStreamingDistributionsInput";
export * from "../types/ListStreamingDistributionsOutput";
export * from "../types/ListStreamingDistributionsExceptionsUnion";

export class ListStreamingDistributionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListStreamingDistributionsInput,
      OutputTypesUnion,
      ListStreamingDistributionsOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListStreamingDistributions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStreamingDistributionsInput,
    ListStreamingDistributionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListStreamingDistributionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListStreamingDistributionsInput,
    ListStreamingDistributionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListStreamingDistributionsInput,
        ListStreamingDistributionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
