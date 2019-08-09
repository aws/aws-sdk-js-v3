import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateContinuousBackups } from "../model/UpdateContinuousBackups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateContinuousBackupsInput } from "../types/UpdateContinuousBackupsInput";
import { UpdateContinuousBackupsOutput } from "../types/UpdateContinuousBackupsOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/UpdateContinuousBackupsInput";
export * from "../types/UpdateContinuousBackupsOutput";
export * from "../types/UpdateContinuousBackupsExceptionsUnion";

export class UpdateContinuousBackupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateContinuousBackupsInput,
      OutputTypesUnion,
      UpdateContinuousBackupsOutput,
      DynamoDBResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateContinuousBackups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateContinuousBackupsInput,
    UpdateContinuousBackupsOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateContinuousBackupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateContinuousBackupsInput,
    UpdateContinuousBackupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateContinuousBackupsInput, UpdateContinuousBackupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
