import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteBucket } from "../model/DeleteBucket";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBucketInput } from "../types/DeleteBucketInput";
import { DeleteBucketOutput } from "../types/DeleteBucketOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/DeleteBucketInput";
export * from "../types/DeleteBucketOutput";
export * from "../types/DeleteBucketExceptionsUnion";

export class DeleteBucketCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBucketInput,
      OutputTypesUnion,
      DeleteBucketOutput,
      S3ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteBucket;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBucketInput,
    DeleteBucketOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteBucketInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteBucketInput, DeleteBucketOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBucketInput, DeleteBucketOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
