import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateNFSFileShare } from "../model/operations/CreateNFSFileShare";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNFSFileShareInput } from "../types/CreateNFSFileShareInput";
import { CreateNFSFileShareOutput } from "../types/CreateNFSFileShareOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/CreateNFSFileShareInput";
export * from "../types/CreateNFSFileShareOutput";
export * from "../types/CreateNFSFileShareExceptionsUnion";

export class CreateNFSFileShareCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNFSFileShareInput,
      OutputTypesUnion,
      CreateNFSFileShareOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateNFSFileShare;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNFSFileShareInput,
    CreateNFSFileShareOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateNFSFileShareInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateNFSFileShareInput,
    CreateNFSFileShareOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateNFSFileShareInput, CreateNFSFileShareOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
