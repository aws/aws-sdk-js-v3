import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSMBFileShare } from "../model/operations/CreateSMBFileShare";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSMBFileShareInput } from "../types/CreateSMBFileShareInput";
import { CreateSMBFileShareOutput } from "../types/CreateSMBFileShareOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/CreateSMBFileShareInput";
export * from "../types/CreateSMBFileShareOutput";
export * from "../types/CreateSMBFileShareExceptionsUnion";

export class CreateSMBFileShareCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSMBFileShareInput,
      OutputTypesUnion,
      CreateSMBFileShareOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = CreateSMBFileShare;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSMBFileShareInput,
    CreateSMBFileShareOutput,
    Blob
  >();

  constructor(readonly input: CreateSMBFileShareInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSMBFileShareInput,
    CreateSMBFileShareOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSMBFileShareInput, CreateSMBFileShareOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
