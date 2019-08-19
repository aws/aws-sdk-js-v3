import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDisk } from "../model/operations/DeleteDisk";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDiskInput } from "../types/DeleteDiskInput";
import { DeleteDiskOutput } from "../types/DeleteDiskOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/DeleteDiskInput";
export * from "../types/DeleteDiskOutput";
export * from "../types/DeleteDiskExceptionsUnion";

export class DeleteDiskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDiskInput,
      OutputTypesUnion,
      DeleteDiskOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDisk;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDiskInput,
    DeleteDiskOutput,
    Blob
  >();

  constructor(readonly input: DeleteDiskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDiskInput, DeleteDiskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDiskInput, DeleteDiskOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
