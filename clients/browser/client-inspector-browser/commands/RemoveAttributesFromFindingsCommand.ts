import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RemoveAttributesFromFindings } from "../model/RemoveAttributesFromFindings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveAttributesFromFindingsInput } from "../types/RemoveAttributesFromFindingsInput";
import { RemoveAttributesFromFindingsOutput } from "../types/RemoveAttributesFromFindingsOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/RemoveAttributesFromFindingsInput";
export * from "../types/RemoveAttributesFromFindingsOutput";
export * from "../types/RemoveAttributesFromFindingsExceptionsUnion";

export class RemoveAttributesFromFindingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveAttributesFromFindingsInput,
      OutputTypesUnion,
      RemoveAttributesFromFindingsOutput,
      InspectorResolvedConfiguration,
      Blob
    > {
  readonly model = RemoveAttributesFromFindings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveAttributesFromFindingsInput,
    RemoveAttributesFromFindingsOutput,
    Blob
  >();

  constructor(readonly input: RemoveAttributesFromFindingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveAttributesFromFindingsInput,
    RemoveAttributesFromFindingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RemoveAttributesFromFindingsInput,
        RemoveAttributesFromFindingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
