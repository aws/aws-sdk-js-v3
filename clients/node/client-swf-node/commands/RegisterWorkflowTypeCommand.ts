import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegisterWorkflowType } from "../model/operations/RegisterWorkflowType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterWorkflowTypeInput } from "../types/RegisterWorkflowTypeInput";
import { RegisterWorkflowTypeOutput } from "../types/RegisterWorkflowTypeOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/RegisterWorkflowTypeInput";
export * from "../types/RegisterWorkflowTypeOutput";
export * from "../types/RegisterWorkflowTypeExceptionsUnion";

export class RegisterWorkflowTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterWorkflowTypeInput,
      OutputTypesUnion,
      RegisterWorkflowTypeOutput,
      SWFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RegisterWorkflowType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterWorkflowTypeInput,
    RegisterWorkflowTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegisterWorkflowTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterWorkflowTypeInput,
    RegisterWorkflowTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterWorkflowTypeInput, RegisterWorkflowTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
