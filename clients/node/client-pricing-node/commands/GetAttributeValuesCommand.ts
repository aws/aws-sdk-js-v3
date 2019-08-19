import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAttributeValues } from "../model/operations/GetAttributeValues";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAttributeValuesInput } from "../types/GetAttributeValuesInput";
import { GetAttributeValuesOutput } from "../types/GetAttributeValuesOutput";
import { PricingResolvedConfiguration } from "../PricingConfiguration";
export * from "../types/GetAttributeValuesInput";
export * from "../types/GetAttributeValuesOutput";
export * from "../types/GetAttributeValuesExceptionsUnion";

export class GetAttributeValuesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAttributeValuesInput,
      OutputTypesUnion,
      GetAttributeValuesOutput,
      PricingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAttributeValues;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAttributeValuesInput,
    GetAttributeValuesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAttributeValuesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PricingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAttributeValuesInput,
    GetAttributeValuesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAttributeValuesInput, GetAttributeValuesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
