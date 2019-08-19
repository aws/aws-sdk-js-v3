import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateInvalidation } from "../model/operations/CreateInvalidation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateInvalidationInput } from "../types/CreateInvalidationInput";
import { CreateInvalidationOutput } from "../types/CreateInvalidationOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreateInvalidationInput";
export * from "../types/CreateInvalidationOutput";
export * from "../types/CreateInvalidationExceptionsUnion";

export class CreateInvalidationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateInvalidationInput,
      OutputTypesUnion,
      CreateInvalidationOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateInvalidation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateInvalidationInput,
    CreateInvalidationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateInvalidationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateInvalidationInput,
    CreateInvalidationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateInvalidationInput, CreateInvalidationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
