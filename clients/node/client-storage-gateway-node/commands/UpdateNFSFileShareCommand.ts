import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateNFSFileShare } from "../model/operations/UpdateNFSFileShare";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateNFSFileShareInput } from "../types/UpdateNFSFileShareInput";
import { UpdateNFSFileShareOutput } from "../types/UpdateNFSFileShareOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/UpdateNFSFileShareInput";
export * from "../types/UpdateNFSFileShareOutput";
export * from "../types/UpdateNFSFileShareExceptionsUnion";

export class UpdateNFSFileShareCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateNFSFileShareInput,
      OutputTypesUnion,
      UpdateNFSFileShareOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateNFSFileShare;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateNFSFileShareInput,
    UpdateNFSFileShareOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateNFSFileShareInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateNFSFileShareInput,
    UpdateNFSFileShareOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateNFSFileShareInput, UpdateNFSFileShareOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
