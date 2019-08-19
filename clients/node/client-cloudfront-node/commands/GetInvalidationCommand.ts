import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetInvalidation } from "../model/operations/GetInvalidation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInvalidationInput } from "../types/GetInvalidationInput";
import { GetInvalidationOutput } from "../types/GetInvalidationOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetInvalidationInput";
export * from "../types/GetInvalidationOutput";
export * from "../types/GetInvalidationExceptionsUnion";

export class GetInvalidationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInvalidationInput,
      OutputTypesUnion,
      GetInvalidationOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetInvalidation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInvalidationInput,
    GetInvalidationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetInvalidationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<GetInvalidationInput, GetInvalidationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInvalidationInput, GetInvalidationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
