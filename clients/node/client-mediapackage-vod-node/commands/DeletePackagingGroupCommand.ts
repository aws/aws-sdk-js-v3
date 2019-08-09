import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeletePackagingGroup } from "../model/DeletePackagingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePackagingGroupInput } from "../types/DeletePackagingGroupInput";
import { DeletePackagingGroupOutput } from "../types/DeletePackagingGroupOutput";
import { MediaPackageVodResolvedConfiguration } from "../MediaPackageVodConfiguration";
export * from "../types/DeletePackagingGroupInput";
export * from "../types/DeletePackagingGroupOutput";
export * from "../types/DeletePackagingGroupExceptionsUnion";

export class DeletePackagingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePackagingGroupInput,
      OutputTypesUnion,
      DeletePackagingGroupOutput,
      MediaPackageVodResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeletePackagingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePackagingGroupInput,
    DeletePackagingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeletePackagingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaPackageVodResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeletePackagingGroupInput,
    DeletePackagingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePackagingGroupInput, DeletePackagingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
