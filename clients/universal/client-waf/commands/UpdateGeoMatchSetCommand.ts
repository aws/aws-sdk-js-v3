import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateGeoMatchSet } from "../model/UpdateGeoMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGeoMatchSetInput } from "../types/UpdateGeoMatchSetInput";
import { UpdateGeoMatchSetOutput } from "../types/UpdateGeoMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/UpdateGeoMatchSetInput";
export * from "../types/UpdateGeoMatchSetOutput";
export * from "../types/UpdateGeoMatchSetExceptionsUnion";

export class UpdateGeoMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGeoMatchSetInput,
      OutputTypesUnion,
      UpdateGeoMatchSetOutput,
      WAFResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateGeoMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGeoMatchSetInput,
    UpdateGeoMatchSetOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateGeoMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateGeoMatchSetInput, UpdateGeoMatchSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateGeoMatchSetInput, UpdateGeoMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
