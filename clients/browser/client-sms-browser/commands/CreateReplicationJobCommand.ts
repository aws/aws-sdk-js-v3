import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateReplicationJob } from "../model/CreateReplicationJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateReplicationJobInput } from "../types/CreateReplicationJobInput";
import { CreateReplicationJobOutput } from "../types/CreateReplicationJobOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/CreateReplicationJobInput";
export * from "../types/CreateReplicationJobOutput";
export * from "../types/CreateReplicationJobExceptionsUnion";

export class CreateReplicationJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateReplicationJobInput,
      OutputTypesUnion,
      CreateReplicationJobOutput,
      SMSResolvedConfiguration,
      Blob
    > {
  readonly model = CreateReplicationJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateReplicationJobInput,
    CreateReplicationJobOutput,
    Blob
  >();

  constructor(readonly input: CreateReplicationJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateReplicationJobInput,
    CreateReplicationJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateReplicationJobInput, CreateReplicationJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
