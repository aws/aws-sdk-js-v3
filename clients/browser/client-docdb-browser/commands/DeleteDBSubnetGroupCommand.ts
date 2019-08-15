import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDBSubnetGroup } from "../model/operations/DeleteDBSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDBSubnetGroupInput } from "../types/DeleteDBSubnetGroupInput";
import { DeleteDBSubnetGroupOutput } from "../types/DeleteDBSubnetGroupOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/DeleteDBSubnetGroupInput";
export * from "../types/DeleteDBSubnetGroupOutput";
export * from "../types/DeleteDBSubnetGroupExceptionsUnion";

export class DeleteDBSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDBSubnetGroupInput,
      OutputTypesUnion,
      DeleteDBSubnetGroupOutput,
      DocDBResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDBSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDBSubnetGroupInput,
    DeleteDBSubnetGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteDBSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDBSubnetGroupInput,
    DeleteDBSubnetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDBSubnetGroupInput, DeleteDBSubnetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
