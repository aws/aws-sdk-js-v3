import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateComputer } from "../model/operations/CreateComputer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateComputerInput } from "../types/CreateComputerInput";
import { CreateComputerOutput } from "../types/CreateComputerOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/CreateComputerInput";
export * from "../types/CreateComputerOutput";
export * from "../types/CreateComputerExceptionsUnion";

export class CreateComputerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateComputerInput,
      OutputTypesUnion,
      CreateComputerOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateComputer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateComputerInput,
    CreateComputerOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateComputerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateComputerInput, CreateComputerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateComputerInput, CreateComputerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
