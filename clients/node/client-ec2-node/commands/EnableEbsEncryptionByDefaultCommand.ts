import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableEbsEncryptionByDefault } from "../model/operations/EnableEbsEncryptionByDefault";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableEbsEncryptionByDefaultInput } from "../types/EnableEbsEncryptionByDefaultInput";
import { EnableEbsEncryptionByDefaultOutput } from "../types/EnableEbsEncryptionByDefaultOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/EnableEbsEncryptionByDefaultInput";
export * from "../types/EnableEbsEncryptionByDefaultOutput";
export * from "../types/EnableEbsEncryptionByDefaultExceptionsUnion";

export class EnableEbsEncryptionByDefaultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableEbsEncryptionByDefaultInput,
      OutputTypesUnion,
      EnableEbsEncryptionByDefaultOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableEbsEncryptionByDefault;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableEbsEncryptionByDefaultInput,
    EnableEbsEncryptionByDefaultOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableEbsEncryptionByDefaultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableEbsEncryptionByDefaultInput,
    EnableEbsEncryptionByDefaultOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        EnableEbsEncryptionByDefaultInput,
        EnableEbsEncryptionByDefaultOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
