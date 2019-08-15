import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddAttributesToFindings } from "../model/operations/AddAttributesToFindings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddAttributesToFindingsInput } from "../types/AddAttributesToFindingsInput";
import { AddAttributesToFindingsOutput } from "../types/AddAttributesToFindingsOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/AddAttributesToFindingsInput";
export * from "../types/AddAttributesToFindingsOutput";
export * from "../types/AddAttributesToFindingsExceptionsUnion";

export class AddAttributesToFindingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddAttributesToFindingsInput,
      OutputTypesUnion,
      AddAttributesToFindingsOutput,
      InspectorResolvedConfiguration,
      Blob
    > {
  readonly model = AddAttributesToFindings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddAttributesToFindingsInput,
    AddAttributesToFindingsOutput,
    Blob
  >();

  constructor(readonly input: AddAttributesToFindingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddAttributesToFindingsInput,
    AddAttributesToFindingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddAttributesToFindingsInput, AddAttributesToFindingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
