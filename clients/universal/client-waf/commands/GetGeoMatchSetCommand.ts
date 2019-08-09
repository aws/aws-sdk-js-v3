import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetGeoMatchSet } from "../model/GetGeoMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGeoMatchSetInput } from "../types/GetGeoMatchSetInput";
import { GetGeoMatchSetOutput } from "../types/GetGeoMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/GetGeoMatchSetInput";
export * from "../types/GetGeoMatchSetOutput";
export * from "../types/GetGeoMatchSetExceptionsUnion";

export class GetGeoMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGeoMatchSetInput,
      OutputTypesUnion,
      GetGeoMatchSetOutput,
      WAFResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetGeoMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGeoMatchSetInput,
    GetGeoMatchSetOutput,
    Uint8Array
  >();

  constructor(readonly input: GetGeoMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<GetGeoMatchSetInput, GetGeoMatchSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetGeoMatchSetInput, GetGeoMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
