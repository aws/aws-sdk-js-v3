import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetTagValues } from "../model/operations/GetTagValues";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTagValuesInput } from "../types/GetTagValuesInput";
import { GetTagValuesOutput } from "../types/GetTagValuesOutput";
import { ResourceGroupsTaggingAPIResolvedConfiguration } from "../ResourceGroupsTaggingAPIConfiguration";
export * from "../types/GetTagValuesInput";
export * from "../types/GetTagValuesOutput";
export * from "../types/GetTagValuesExceptionsUnion";

export class GetTagValuesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTagValuesInput,
      OutputTypesUnion,
      GetTagValuesOutput,
      ResourceGroupsTaggingAPIResolvedConfiguration,
      Blob
    > {
  readonly model = GetTagValues;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTagValuesInput,
    GetTagValuesOutput,
    Blob
  >();

  constructor(readonly input: GetTagValuesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ResourceGroupsTaggingAPIResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTagValuesInput, GetTagValuesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTagValuesInput, GetTagValuesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
