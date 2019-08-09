import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateProject } from "../model/CreateProject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateProjectInput } from "../types/CreateProjectInput";
import { CreateProjectOutput } from "../types/CreateProjectOutput";
import { CodeStarResolvedConfiguration } from "../CodeStarConfiguration";
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
      CodeStarResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateProject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateProjectInput,
    CreateProjectOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateProjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeStarResolvedConfiguration
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
