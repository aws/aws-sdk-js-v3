import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetWorkflow } from "../model/GetWorkflow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetWorkflowInput } from "../types/GetWorkflowInput";
import { GetWorkflowOutput } from "../types/GetWorkflowOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetWorkflowInput";
export * from "../types/GetWorkflowOutput";
export * from "../types/GetWorkflowExceptionsUnion";

export class GetWorkflowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetWorkflowInput,
      OutputTypesUnion,
      GetWorkflowOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetWorkflow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetWorkflowInput,
    GetWorkflowOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetWorkflowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetWorkflowInput, GetWorkflowOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetWorkflowInput, GetWorkflowOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
