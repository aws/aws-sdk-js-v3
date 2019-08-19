import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutWorkflowRunProperties } from "../model/operations/PutWorkflowRunProperties";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutWorkflowRunPropertiesInput } from "../types/PutWorkflowRunPropertiesInput";
import { PutWorkflowRunPropertiesOutput } from "../types/PutWorkflowRunPropertiesOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/PutWorkflowRunPropertiesInput";
export * from "../types/PutWorkflowRunPropertiesOutput";
export * from "../types/PutWorkflowRunPropertiesExceptionsUnion";

export class PutWorkflowRunPropertiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutWorkflowRunPropertiesInput,
      OutputTypesUnion,
      PutWorkflowRunPropertiesOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutWorkflowRunProperties;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutWorkflowRunPropertiesInput,
    PutWorkflowRunPropertiesOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutWorkflowRunPropertiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutWorkflowRunPropertiesInput,
    PutWorkflowRunPropertiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutWorkflowRunPropertiesInput, PutWorkflowRunPropertiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
