import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateProject } from "../model/CreateProject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateProjectInput } from "../types/CreateProjectInput";
import { CreateProjectOutput } from "../types/CreateProjectOutput";
import { IoT1ClickProjectsResolvedConfiguration } from "../IoT1ClickProjectsConfiguration";
export * from "../types/CreateProjectInput";
export * from "../types/CreateProjectOutput";
export * from "../types/CreateProjectExceptionsUnion";

export class CreateProjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateProjectInput,
      OutputTypesUnion,
      CreateProjectOutput,
      IoT1ClickProjectsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateProject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateProjectInput,
    CreateProjectOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateProjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoT1ClickProjectsResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateProjectInput, CreateProjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateProjectInput, CreateProjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
