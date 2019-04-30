import * as __aws_sdk_location_constraint_middleware from "@aws-sdk/location-constraint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateBucket } from "../model/CreateBucket";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBucketInput } from "../types/CreateBucketInput";
import { CreateBucketOutput } from "../types/CreateBucketOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/CreateBucketInput";
export * from "../types/CreateBucketOutput";
export * from "../types/CreateBucketExceptionsUnion";

export class CreateBucketCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBucketInput,
      OutputTypesUnion,
      CreateBucketOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBucketInput,
    CreateBucketOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateBucketInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateBucketInput, CreateBucketOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: CreateBucket
    };
    stack.add(
      __aws_sdk_location_constraint_middleware.locationConstraintMiddleware(
        configuration.region
      ),
      {
        step: "initialize",
        priority: 0
      }
    );
    return stack.resolve(
      handler<CreateBucketInput, CreateBucketOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
