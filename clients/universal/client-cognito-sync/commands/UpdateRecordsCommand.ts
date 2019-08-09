import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRecords } from "../model/UpdateRecords";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRecordsInput } from "../types/UpdateRecordsInput";
import { UpdateRecordsOutput } from "../types/UpdateRecordsOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/UpdateRecordsInput";
export * from "../types/UpdateRecordsOutput";
export * from "../types/UpdateRecordsExceptionsUnion";

export class UpdateRecordsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRecordsInput,
      OutputTypesUnion,
      UpdateRecordsOutput,
      CognitoSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateRecords;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRecordsInput,
    UpdateRecordsOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateRecordsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateRecordsInput, UpdateRecordsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRecordsInput, UpdateRecordsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
