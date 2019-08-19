import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetTagsForResource } from "../model/operations/SetTagsForResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetTagsForResourceInput } from "../types/SetTagsForResourceInput";
import { SetTagsForResourceOutput } from "../types/SetTagsForResourceOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/SetTagsForResourceInput";
export * from "../types/SetTagsForResourceOutput";
export * from "../types/SetTagsForResourceExceptionsUnion";

export class SetTagsForResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetTagsForResourceInput,
      OutputTypesUnion,
      SetTagsForResourceOutput,
      InspectorResolvedConfiguration,
      Blob
    > {
  readonly model = SetTagsForResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetTagsForResourceInput,
    SetTagsForResourceOutput,
    Blob
  >();

  constructor(readonly input: SetTagsForResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetTagsForResourceInput,
    SetTagsForResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetTagsForResourceInput, SetTagsForResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
