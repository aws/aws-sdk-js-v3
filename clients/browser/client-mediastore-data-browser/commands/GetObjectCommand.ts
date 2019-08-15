import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetObject } from "../model/operations/GetObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetObjectInput } from "../types/GetObjectInput";
import { GetObjectOutput } from "../types/GetObjectOutput";
import { MediaStoreDataResolvedConfiguration } from "../MediaStoreDataConfiguration";
export * from "../types/GetObjectInput";
export * from "../types/GetObjectOutput";
export * from "../types/GetObjectExceptionsUnion";

export class GetObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetObjectInput,
      OutputTypesUnion,
      GetObjectOutput,
      MediaStoreDataResolvedConfiguration,
      Blob
    > {
  readonly model = GetObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetObjectInput,
    GetObjectOutput,
    Blob
  >();

  constructor(readonly input: GetObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaStoreDataResolvedConfiguration
  ): __aws_sdk_types.Handler<GetObjectInput, GetObjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetObjectInput, GetObjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
