import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetEbsEncryptionByDefault } from "../model/operations/GetEbsEncryptionByDefault";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEbsEncryptionByDefaultInput } from "../types/GetEbsEncryptionByDefaultInput";
import { GetEbsEncryptionByDefaultOutput } from "../types/GetEbsEncryptionByDefaultOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetEbsEncryptionByDefaultInput";
export * from "../types/GetEbsEncryptionByDefaultOutput";
export * from "../types/GetEbsEncryptionByDefaultExceptionsUnion";

export class GetEbsEncryptionByDefaultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEbsEncryptionByDefaultInput,
      OutputTypesUnion,
      GetEbsEncryptionByDefaultOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = GetEbsEncryptionByDefault;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEbsEncryptionByDefaultInput,
    GetEbsEncryptionByDefaultOutput,
    Blob
  >();

  constructor(readonly input: GetEbsEncryptionByDefaultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetEbsEncryptionByDefaultInput,
    GetEbsEncryptionByDefaultOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEbsEncryptionByDefaultInput, GetEbsEncryptionByDefaultOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
