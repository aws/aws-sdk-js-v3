import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateBackup } from "../model/operations/CreateBackup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBackupInput } from "../types/CreateBackupInput";
import { CreateBackupOutput } from "../types/CreateBackupOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/CreateBackupInput";
export * from "../types/CreateBackupOutput";
export * from "../types/CreateBackupExceptionsUnion";

export class CreateBackupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBackupInput,
      OutputTypesUnion,
      CreateBackupOutput,
      OpsWorksCMResolvedConfiguration,
      Blob
    > {
  readonly model = CreateBackup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBackupInput,
    CreateBackupOutput,
    Blob
  >();

  constructor(readonly input: CreateBackupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateBackupInput, CreateBackupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateBackupInput, CreateBackupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
