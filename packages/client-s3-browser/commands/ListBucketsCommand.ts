import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListBuckets } from "../model/ListBuckets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBucketsInput } from "../types/ListBucketsInput";
import { ListBucketsOutput } from "../types/ListBucketsOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/ListBucketsInput";
export * from "../types/ListBucketsOutput";
export * from "../types/ListBucketsExceptionsUnion";

export class ListBucketsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBucketsInput,
      OutputTypesUnion,
      ListBucketsOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = ListBuckets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBucketsInput,
    ListBucketsOutput,
    Blob
  >();

  constructor(readonly input: ListBucketsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<ListBucketsInput, ListBucketsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_middleware_header_default.headerDefault({
        "Content-Type": "application/octet-stream"
      }),
      {
        step: "build",
        priority: -50,
        tags: { "Content-Type": true }
      }
    );
    return stack.resolve(
      handler<ListBucketsInput, ListBucketsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
