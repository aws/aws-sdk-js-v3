import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSnapshotCopyGrant } from "../model/operations/CreateSnapshotCopyGrant";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSnapshotCopyGrantInput } from "../types/CreateSnapshotCopyGrantInput";
import { CreateSnapshotCopyGrantOutput } from "../types/CreateSnapshotCopyGrantOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/CreateSnapshotCopyGrantInput";
export * from "../types/CreateSnapshotCopyGrantOutput";
export * from "../types/CreateSnapshotCopyGrantExceptionsUnion";

export class CreateSnapshotCopyGrantCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSnapshotCopyGrantInput,
      OutputTypesUnion,
      CreateSnapshotCopyGrantOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = CreateSnapshotCopyGrant;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSnapshotCopyGrantInput,
    CreateSnapshotCopyGrantOutput,
    Blob
  >();

  constructor(readonly input: CreateSnapshotCopyGrantInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSnapshotCopyGrantInput,
    CreateSnapshotCopyGrantOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSnapshotCopyGrantInput, CreateSnapshotCopyGrantOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
