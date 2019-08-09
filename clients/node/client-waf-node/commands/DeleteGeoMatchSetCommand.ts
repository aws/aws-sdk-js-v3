import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteGeoMatchSet } from "../model/DeleteGeoMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteGeoMatchSetInput } from "../types/DeleteGeoMatchSetInput";
import { DeleteGeoMatchSetOutput } from "../types/DeleteGeoMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/DeleteGeoMatchSetInput";
export * from "../types/DeleteGeoMatchSetOutput";
export * from "../types/DeleteGeoMatchSetExceptionsUnion";

export class DeleteGeoMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteGeoMatchSetInput,
      OutputTypesUnion,
      DeleteGeoMatchSetOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteGeoMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteGeoMatchSetInput,
    DeleteGeoMatchSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteGeoMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteGeoMatchSetInput, DeleteGeoMatchSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteGeoMatchSetInput, DeleteGeoMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
