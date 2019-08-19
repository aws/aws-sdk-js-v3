import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetWorkflowRunProperties } from "../model/operations/GetWorkflowRunProperties";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetWorkflowRunPropertiesInput } from "../types/GetWorkflowRunPropertiesInput";
import { GetWorkflowRunPropertiesOutput } from "../types/GetWorkflowRunPropertiesOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetWorkflowRunPropertiesInput";
export * from "../types/GetWorkflowRunPropertiesOutput";
export * from "../types/GetWorkflowRunPropertiesExceptionsUnion";

export class GetWorkflowRunPropertiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetWorkflowRunPropertiesInput,
      OutputTypesUnion,
      GetWorkflowRunPropertiesOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetWorkflowRunProperties;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetWorkflowRunPropertiesInput,
    GetWorkflowRunPropertiesOutput,
    Blob
  >();

  constructor(readonly input: GetWorkflowRunPropertiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetWorkflowRunPropertiesInput,
    GetWorkflowRunPropertiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetWorkflowRunPropertiesInput, GetWorkflowRunPropertiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
