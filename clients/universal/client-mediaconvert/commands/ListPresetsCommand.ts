import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPresets } from "../model/ListPresets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPresetsInput } from "../types/ListPresetsInput";
import { ListPresetsOutput } from "../types/ListPresetsOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
export * from "../types/ListPresetsInput";
export * from "../types/ListPresetsOutput";
export * from "../types/ListPresetsExceptionsUnion";

export class ListPresetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPresetsInput,
      OutputTypesUnion,
      ListPresetsOutput,
      MediaConvertResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListPresets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPresetsInput,
    ListPresetsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListPresetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaConvertResolvedConfiguration
  ): __aws_sdk_types.Handler<ListPresetsInput, ListPresetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPresetsInput, ListPresetsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
