import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateSMBFileShare } from "../model/UpdateSMBFileShare";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSMBFileShareInput } from "../types/UpdateSMBFileShareInput";
import { UpdateSMBFileShareOutput } from "../types/UpdateSMBFileShareOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/UpdateSMBFileShareInput";
export * from "../types/UpdateSMBFileShareOutput";
export * from "../types/UpdateSMBFileShareExceptionsUnion";

export class UpdateSMBFileShareCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSMBFileShareInput,
      OutputTypesUnion,
      UpdateSMBFileShareOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateSMBFileShare;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSMBFileShareInput,
    UpdateSMBFileShareOutput,
    Blob
  >();

  constructor(readonly input: UpdateSMBFileShareInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSMBFileShareInput,
    UpdateSMBFileShareOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSMBFileShareInput, UpdateSMBFileShareOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
