import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateReplicationJob } from "../model/UpdateReplicationJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateReplicationJobInput } from "../types/UpdateReplicationJobInput";
import { UpdateReplicationJobOutput } from "../types/UpdateReplicationJobOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/UpdateReplicationJobInput";
export * from "../types/UpdateReplicationJobOutput";
export * from "../types/UpdateReplicationJobExceptionsUnion";

export class UpdateReplicationJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateReplicationJobInput,
      OutputTypesUnion,
      UpdateReplicationJobOutput,
      SMSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateReplicationJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateReplicationJobInput,
    UpdateReplicationJobOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateReplicationJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateReplicationJobInput,
    UpdateReplicationJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateReplicationJobInput, UpdateReplicationJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
