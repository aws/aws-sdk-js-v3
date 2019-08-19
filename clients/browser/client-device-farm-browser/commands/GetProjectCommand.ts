import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetProject } from "../model/operations/GetProject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetProjectInput } from "../types/GetProjectInput";
import { GetProjectOutput } from "../types/GetProjectOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/GetProjectInput";
export * from "../types/GetProjectOutput";
export * from "../types/GetProjectExceptionsUnion";

export class GetProjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetProjectInput,
      OutputTypesUnion,
      GetProjectOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = GetProject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetProjectInput,
    GetProjectOutput,
    Blob
  >();

  constructor(readonly input: GetProjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<GetProjectInput, GetProjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetProjectInput, GetProjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
