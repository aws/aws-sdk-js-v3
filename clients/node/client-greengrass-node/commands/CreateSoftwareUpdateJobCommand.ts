import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSoftwareUpdateJob } from "../model/operations/CreateSoftwareUpdateJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSoftwareUpdateJobInput } from "../types/CreateSoftwareUpdateJobInput";
import { CreateSoftwareUpdateJobOutput } from "../types/CreateSoftwareUpdateJobOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateSoftwareUpdateJobInput";
export * from "../types/CreateSoftwareUpdateJobOutput";
export * from "../types/CreateSoftwareUpdateJobExceptionsUnion";

export class CreateSoftwareUpdateJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSoftwareUpdateJobInput,
      OutputTypesUnion,
      CreateSoftwareUpdateJobOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSoftwareUpdateJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSoftwareUpdateJobInput,
    CreateSoftwareUpdateJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSoftwareUpdateJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSoftwareUpdateJobInput,
    CreateSoftwareUpdateJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSoftwareUpdateJobInput, CreateSoftwareUpdateJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
