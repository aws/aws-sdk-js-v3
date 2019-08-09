import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateExportJob } from "../model/CreateExportJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateExportJobInput } from "../types/CreateExportJobInput";
import { CreateExportJobOutput } from "../types/CreateExportJobOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/CreateExportJobInput";
export * from "../types/CreateExportJobOutput";
export * from "../types/CreateExportJobExceptionsUnion";

export class CreateExportJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateExportJobInput,
      OutputTypesUnion,
      CreateExportJobOutput,
      PinpointResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateExportJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateExportJobInput,
    CreateExportJobOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateExportJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateExportJobInput, CreateExportJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateExportJobInput, CreateExportJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
