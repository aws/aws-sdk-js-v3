import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateGeoMatchSet } from "../model/operations/CreateGeoMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateGeoMatchSetInput } from "../types/CreateGeoMatchSetInput";
import { CreateGeoMatchSetOutput } from "../types/CreateGeoMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/CreateGeoMatchSetInput";
export * from "../types/CreateGeoMatchSetOutput";
export * from "../types/CreateGeoMatchSetExceptionsUnion";

export class CreateGeoMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateGeoMatchSetInput,
      OutputTypesUnion,
      CreateGeoMatchSetOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateGeoMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateGeoMatchSetInput,
    CreateGeoMatchSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateGeoMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateGeoMatchSetInput, CreateGeoMatchSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateGeoMatchSetInput, CreateGeoMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
