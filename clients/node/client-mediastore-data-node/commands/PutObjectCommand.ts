import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutObject } from "../model/PutObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutObjectInput } from "../types/PutObjectInput";
import { PutObjectOutput } from "../types/PutObjectOutput";
import { MediaStoreDataResolvedConfiguration } from "../MediaStoreDataConfiguration";
export * from "../types/PutObjectInput";
export * from "../types/PutObjectOutput";
export * from "../types/PutObjectExceptionsUnion";

export class PutObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutObjectInput,
      OutputTypesUnion,
      PutObjectOutput,
      MediaStoreDataResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutObjectInput,
    PutObjectOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaStoreDataResolvedConfiguration
  ): __aws_sdk_types.Handler<PutObjectInput, PutObjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_middleware_header_default.headerDefault({
        "X-Amz-Content-Sha256": "UNSIGNED_PAYLOAD"
      }),
      {
        step: "build",
        priority: 100,
        tags: { UNSIGNED_PAYLOAD: true }
      }
    );
    return stack.resolve(
      handler<PutObjectInput, PutObjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
