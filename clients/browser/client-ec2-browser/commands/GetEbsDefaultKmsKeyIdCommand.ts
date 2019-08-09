import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetEbsDefaultKmsKeyId } from "../model/GetEbsDefaultKmsKeyId";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEbsDefaultKmsKeyIdInput } from "../types/GetEbsDefaultKmsKeyIdInput";
import { GetEbsDefaultKmsKeyIdOutput } from "../types/GetEbsDefaultKmsKeyIdOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetEbsDefaultKmsKeyIdInput";
export * from "../types/GetEbsDefaultKmsKeyIdOutput";
export * from "../types/GetEbsDefaultKmsKeyIdExceptionsUnion";

export class GetEbsDefaultKmsKeyIdCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEbsDefaultKmsKeyIdInput,
      OutputTypesUnion,
      GetEbsDefaultKmsKeyIdOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = GetEbsDefaultKmsKeyId;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEbsDefaultKmsKeyIdInput,
    GetEbsDefaultKmsKeyIdOutput,
    Blob
  >();

  constructor(readonly input: GetEbsDefaultKmsKeyIdInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetEbsDefaultKmsKeyIdInput,
    GetEbsDefaultKmsKeyIdOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEbsDefaultKmsKeyIdInput, GetEbsDefaultKmsKeyIdOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
